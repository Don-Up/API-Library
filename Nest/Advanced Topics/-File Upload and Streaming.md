### **File Upload and Streaming in NestJS**

File uploads and streaming are essential features in many modern applications, such as cloud storage systems, video platforms, or APIs that require large file handling. NestJS provides robust tools for handling file uploads with **Multer** and supports streaming large files efficiently with the **Node.js Streams API**.

---

### **1. Handling File Uploads with Multer**

NestJS uses the popular **Multer** package for handling file uploads. Multer is a middleware for handling `multipart/form-data`, typically used for uploading files.

---

#### **1.1 Setting Up Multer**

To handle file uploads, you need the `@nestjs/platform-express` package, which is included by default in most NestJS projects. If it’s missing, install it:

```bash
npm install @nestjs/platform-express multer
```

---

#### **1.2 Basic File Upload Example**

1. **Create a File Upload Controller**

   In your controller, you can use the built-in `@UseInterceptors` decorator with the `FileInterceptor` provided by Multer.

   ```typescript
   import {
     Controller,
     Post,
     UploadedFile,
     UseInterceptors,
   } from '@nestjs/common';
   import { FileInterceptor } from '@nestjs/platform-express';

   @Controller('upload')
   export class FileUploadController {
     @Post('single')
     @UseInterceptors(FileInterceptor('file')) // Intercept file upload
     uploadFile(@UploadedFile() file: Express.Multer.File) {
       console.log(file); // See the uploaded file metadata
       return {
         message: 'File uploaded successfully!',
         fileName: file.originalname,
       };
     }
   }
   ```

   - **`@UploadedFile()`**: Extracts the uploaded file.
   - **`FileInterceptor`**: Handles single file uploads. The `file` argument corresponds to the `name` attribute of the file input field in the frontend.

2. **Configure Multer Options**

   You can configure Multer to specify the destination folder, file naming, and size limits.

   ```typescript
   import { diskStorage } from 'multer';
   import { extname } from 'path';
   
   @Controller('upload')
   export class FileUploadController {
     @Post('custom')
     @UseInterceptors(
       FileInterceptor('file', {
         storage: diskStorage({
           destination: './uploads', // Save files in the 'uploads' folder
           filename: (req, file, callback) => {
             // Rename the file
             const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
             const ext = extname(file.originalname); // Get file extension
             const fileName = `${file.fieldname}-${uniqueSuffix}${ext}`;
             callback(null, fileName);
           },
         }),
         limits: {
           fileSize: 5 * 1024 * 1024, // Limit file size to 5MB
         },
       }),
     )
     uploadFile(@UploadedFile() file: Express.Multer.File) {
       console.log(file);
       return {
         message: 'Custom file uploaded successfully!',
         fileName: file.filename,
       };
     }
   }
   ```

   - **`diskStorage`**: Saves files to disk.
   - **`limits.fileSize`**: Restricts the maximum file size.
   - **`destination`**: Specifies the directory where files will be stored.
   - **`filename`**: Defines the naming convention for uploaded files.

---

#### **1.3 Multiple File Uploads**

To handle multiple files, use the `FilesInterceptor`.

```typescript
import { Controller, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('upload')
export class FileUploadController {
  @Post('multiple')
  @UseInterceptors(FilesInterceptor('files', 5)) // Allow up to 5 files
  uploadMultipleFiles(@UploadedFiles() files: Express.Multer.File[]) {
    console.log(files);
    return {
      message: 'Files uploaded successfully!',
      files: files.map((file) => file.originalname),
    };
  }
}
```

---

#### **1.4 Validation and Filtering**

You can validate or filter uploaded files based on their MIME types.

```typescript
import { BadRequestException } from '@nestjs/common';

@UseInterceptors(
  FileInterceptor('file', {
    fileFilter: (req, file, callback) => {
      if (!file.mimetype.match(/image\/(jpeg|png|gif)/)) {
        return callback(
          new BadRequestException('Only image files are allowed!'),
          false,
        );
      }
      callback(null, true);
    },
  }),
)
```

---

### **2. Streaming Large Files Using Streams API**

Streaming is a key technique for handling large files efficiently without consuming too much memory. Instead of loading the entire file into memory, streaming processes the file in chunks.

---

#### **2.1 Basic File Streaming Example**

NestJS supports streaming using the **Node.js Streams API** and the `@Res()` decorator from `@nestjs/common`.

1. **Stream a File to the Client**

   ```typescript
   import { Controller, Get, Res } from '@nestjs/common';
   import { Response } from 'express';
   import { createReadStream } from 'fs';
   import { join } from 'path';
   
   @Controller('stream')
   export class FileStreamController {
     @Get('file')
     streamFile(@Res() res: Response) {
       const filePath = join(__dirname, '../uploads/large-file.mp4');
       const fileStream = createReadStream(filePath);
   
       res.set({
         'Content-Type': 'video/mp4',
         'Content-Disposition': 'inline; filename="large-file.mp4"',
       });
   
       fileStream.pipe(res); // Pipe the file stream to the response
     }
   }
   ```

   - **`createReadStream`**: Reads the file in chunks instead of loading it entirely into memory.
   - **`res.set()`**: Sets appropriate headers for the response, such as `Content-Type` for videos, images, or other file types.
   - **`pipe`**: Sends the stream directly to the client.

---

#### **2.2 Partial Content Streaming (Range Requests)**

For large files like videos, it’s common to support partial content streaming so the client can request specific ranges of the file (e.g., seeking in a video).

```typescript
import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { createReadStream, statSync } from 'fs';
import { join } from 'path';

@Controller('stream')
export class FileStreamController {
  @Get('video')
  streamVideo(@Req() req: Request, @Res() res: Response) {
    const filePath = join(__dirname, '../uploads/large-video.mp4');
    const fileStat = statSync(filePath); // Get file size
    const fileSize = fileStat.size;

    const range = req.headers.range;
    if (!range) {
      // If no range header is present, send the entire file
      res.set({
        'Content-Type': 'video/mp4',
        'Content-Length': fileSize,
      });
      createReadStream(filePath).pipe(res);
      return;
    }

    // Parse the range header
    const [start, end] = range
      .replace(/bytes=/, '')
      .split('-')
      .map((str) => parseInt(str, 10));

    const chunkStart = start || 0;
    const chunkEnd = end || fileSize - 1;
    const chunkSize = chunkEnd - chunkStart + 1;

    res.set({
      'Content-Range': `bytes ${chunkStart}-${chunkEnd}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunkSize,
      'Content-Type': 'video/mp4',
    });

    const fileStream = createReadStream(filePath, { start: chunkStart, end: chunkEnd });
    fileStream.pipe(res);
  }
}
```

- **`statSync`**: Retrieves file metadata, such as size.
- **`Range` Header**:
  - Allows the client to request specific parts of a file.
  - Commonly used for streaming videos or downloading large files in chunks.
- **Partial Response**:
  - The `Content-Range` header specifies the range of bytes being sent.
  - The client can use this to resume downloads or play specific parts of a video.

---

### **3. Streaming from External Sources**

You can also stream files from external sources (e.g., AWS S3, Google Cloud Storage, or other APIs).

#### **Example: Streaming from S3**

```typescript
import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { S3 } from 'aws-sdk';

@Controller('stream')
export class FileStreamController {
  private s3 = new S3();

  @Get('s3-file')
  async streamS3File(@Res() res: Response) {
    const params = {
      Bucket: 'your-bucket-name',
      Key: 'path/to/large-file.mp4',
    };

    const fileStream = this.s3.getObject(params).createReadStream();

    res.set({
      'Content-Type': 'video/mp4',
      'Content-Disposition': 'inline; filename="large-file.mp4"',
    });

    fileStream.pipe(res);
  }
}
```

---

### **4. Best Practices for File Upload and Streaming**

1. **File Validation**:
   - Validate file types and sizes during upload to prevent malicious uploads (e.g., only allow images, videos, etc.).

2. **Security**:
   - Store files in a secure directory (outside the public folder) or upload them to cloud storage.
   - Use HTTPS to secure file uploads and downloads.

3. **Scalability**:
   - Use cloud storage (e.g., AWS S3, Google Cloud Storage) for large-scale applications.
   - Use a CDN (Content Delivery Network) for serving static files and videos.

4. **Streaming for Large Files**:
   - Use range requests for large files to improve user experience (e.g., video seeking).
   - Stream files in chunks to avoid high memory consumption.

5. **Use Middleware**:
   - Use libraries like `sharp` for image processing or `ffmpeg` for video transcoding during uploads.

---

### **Summary**

- **File Uploads**:
  - Use **Multer** for handling single and multiple file uploads.
  - Customize file storage, validation, and naming conventions.
- **Streaming**:
  - Use the **Node.js Streams API** to handle large files efficiently.
  - Implement partial content streaming for videos using `Range` headers.
- **Scalability**:
  - Use cloud storage and CDNs for large-scale file handling.
- **Security**:
  - Validate uploaded files, and secure file storage with proper access controls.

These strategies ensure efficient and secure handling of file uploads and streaming in your NestJS applications.