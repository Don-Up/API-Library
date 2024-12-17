### **Handling File Uploads with Multer in NestJS**

File uploads are a common requirement in modern web applications, whether it’s for profile pictures, documents, or media uploads. NestJS simplifies file handling through integration with **Multer**, a middleware for handling `multipart/form-data`, primarily used for uploading files.

In this guide, we’ll cover how to handle file uploads in NestJS using **Multer**.

---

### **1. Install Required Dependencies**

Multer comes pre-installed with NestJS when you generate a project. However, if you need to manually add it, install the necessary packages:

```bash
npm install @nestjs/platform-express multer
```

`@nestjs/platform-express` integrates Multer with the NestJS framework.

---

### **2. Basic File Upload Setup**

#### **Step 1: Creating the Upload Endpoint**

To handle file uploads, use the `FileInterceptor` provided by NestJS. The `FileInterceptor` wraps Multer and allows you to handle single file uploads.

##### **Controller Example**

```typescript
import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('upload')
export class UploadController {
  @Post('single')
  @UseInterceptors(FileInterceptor('file')) // 'file' is the name of the form field
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file); // File metadata
    return { message: 'File uploaded successfully', file };
  }
}
```

#### **Explanation:**
1. **`@UseInterceptors(FileInterceptor('file'))`**:
   - Wraps the request in a file-handling middleware.
   - The `'file'` parameter specifies the name of the form field expected in the request.

2. **`@UploadedFile()`**:
   - Extracts the uploaded file object from the request.

3. **File Metadata**:
   - The `file` object contains metadata such as the original filename, encoding, MIME type, and storage location. Example structure:
     ```json
     {
       "fieldname": "file",
       "originalname": "example.jpg",
       "encoding": "7bit",
       "mimetype": "image/jpeg",
       "size": 1024,
       "destination": "./uploads",
       "filename": "c4f8a8b8c3d8-example.jpg",
       "path": "./uploads/c4f8a8b8c3d8-example.jpg"
     }
     ```

#### **Making a File Upload Request**
You can test the endpoint using tools like **Postman** or **cURL**:

- **Postman**:
  - Set the request type to `POST`.
  - Add a `Key` named `file` in the `form-data` section and attach a file.

- **cURL**:
  ```bash
  curl -X POST -F "file=@example.jpg" http://localhost:3000/upload/single
  ```

---

### **3. Configuring Multer Options**

You can customize Multer’s behavior, such as the storage location and file naming conventions, by passing options to the interceptor.

#### **Step 1: Creating a Multer Configuration**

NestJS provides the `diskStorage` option for saving files to the disk with custom rules.

```typescript
import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { extname } from 'path';

@Controller('upload')
export class UploadController {
  @Post('custom')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads', // Directory where files will be stored
        filename: (req, file, callback) => {
          const uniqueSuffix = `${uuidv4()}${extname(file.originalname)}`; // Unique filename
          callback(null, uniqueSuffix);
        },
      }),
      limits: {
        fileSize: 5 * 1024 * 1024, // 5MB file size limit
      },
      fileFilter: (req, file, callback) => {
        if (!file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
          return callback(new Error('Only image files are allowed!'), false);
        }
        callback(null, true);
      },
    }),
  )
  uploadCustomFile(@UploadedFile() file: Express.Multer.File) {
    return { message: 'File uploaded successfully', file };
  }
}
```

#### **Explanation:**

1. **`diskStorage`**:
   - Configures where and how files are stored on the disk.
   - `destination`: Specifies the directory to store files (`./uploads` in this case).
   - `filename`: Generates a unique filename with a UUID and retains the original file extension.

2. **`limits`**:
   - Restricts file size. For example, `5 * 1024 * 1024` sets a 5MB limit.

3. **`fileFilter`**:
   - Filters files based on MIME type. For example, only images (`jpg`, `jpeg`, `png`, `gif`) are allowed.

4. **Error Handling**:
   - If a file doesn’t meet the filter criteria, Multer throws an error, which can be handled by a global exception filter.

---

### **4. Handling Multiple File Uploads**

To upload multiple files, use the `FilesInterceptor` provided by NestJS.

```typescript
import {
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('upload')
export class UploadController {
  @Post('multiple')
  @UseInterceptors(FilesInterceptor('files', 5)) // Limit to 5 files
  uploadMultipleFiles(@UploadedFiles() files: Array<Express.Multer.File>) {
    console.log(files); // Array of files
    return { message: 'Files uploaded successfully', files };
  }
}
```

#### **Explanation:**

1. **`FilesInterceptor`**:
   - Similar to `FileInterceptor` but allows uploading multiple files.
   - The second parameter specifies the maximum number of files allowed.

2. **`@UploadedFiles()`**:
   - Retrieves an array of file objects.

---

### **5. Serving Uploaded Files**

Uploaded files are typically stored on the server. To serve these files to clients, you can use the `serve-static` package.

#### **Step 1: Install `serve-static`**

```bash
npm install @nestjs/serve-static
```

#### **Step 2: Configure Static File Serving**

In your `AppModule`, configure the `ServeStaticModule` to serve files from the upload directory:

```typescript
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'), // Serve files from the "uploads" folder
      serveRoot: '/uploads', // Files will be accessible under '/uploads'
    }),
  ],
})
export class AppModule {}
```

Now, uploaded files are accessible via `http://localhost:3000/uploads/<filename>`.

---

### **6. Error Handling for File Uploads**

You can handle upload errors using NestJS's built-in exception handling mechanism.

#### **Global Error Filter Example**

```typescript
import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';

@Catch(HttpException)
export class FileUploadExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    response.status(exception.getStatus()).json({
      statusCode: exception.getStatus(),
      message: exception.message,
    });
  }
}
```

Attach this filter globally or to specific controllers to gracefully handle upload exceptions.

---

### **7. Storing Files in Cloud Services**

Instead of saving files locally, you can store them in cloud storage like **Amazon S3**, **Google Cloud Storage**, or **Azure Blob Storage**.

#### **Example: Upload to S3**

1. Install the AWS SDK:

   ```bash
   npm install aws-sdk multer-s3
   ```

2. Configure Multer for S3 storage:

   ```typescript
   import { S3 } from 'aws-sdk';
   import * as multerS3 from 'multer-s3';
   
   @Post('s3')
   @UseInterceptors(
     FileInterceptor('file', {
       storage: multerS3({
         s3: new S3(),
         bucket: 'your-bucket-name',
         acl: 'public-read', // Access control
         key: (req, file, callback) => {
           callback(null, `${Date.now()}-${file.originalname}`);
         },
       }),
     }),
   )
   async uploadToS3(@UploadedFile() file: Express.Multer.File) {
     return { message: 'File uploaded to S3', file };
   }
   ```

---

### **8. Best Practices for File Uploads**

1. **Validate File Size and Type**:
   - Prevent malicious files or oversized uploads with `limits` and `fileFilter`.

2. **Use Cloud Storage for Scalability**:
   - Local storage is not ideal for distributed systems; use services like S3, GCP, or Azure.

3. **Secure Uploads**:
   - Avoid storing files in publicly accessible directories.
   - Use antivirus solutions to scan uploaded files.

4. **Clean Up Temporary Files**:
   - Remove unused files to save disk space.

5. **Optimize File Handling**:
   - Compress or resize large files like images before saving or serving.

---

### **Summary**

- Use **Multer** with `FileInterceptor` or `FilesInterceptor` for handling single or multiple file uploads.
- Configure custom storage options (e.g., disk, cloud storage like S3).
- Validate file size and type to ensure secure uploads.
- Serve uploaded files with `@nestjs/serve-static` or integrate a cloud service for scalability.
- Implement error handling and cleanup mechanisms to manage file uploads efficiently.

By following these steps and best practices, you can handle file uploads securely and efficiently in your NestJS application.