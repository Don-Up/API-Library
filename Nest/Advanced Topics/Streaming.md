### **Streaming Large Files in NestJS Using the Streams API**

<audio src="..\..\mp3\The __Streams A.mp3"></audio>

The **Streams API** in Node.js is a powerful tool for handling large files efficiently. Instead of loading an entire file into memory, streams process data in chunks, making it possible to handle large files without exhausting system resources. This is especially useful for scenarios like serving videos, audio, or large datasets.

In this guide, we’ll explore how to stream large files in a **NestJS** application using the Streams API.

---

### **1. Why Use Streams for Large Files?**

<audio src="..\..\mp3\- __Memory Effi.mp3"></audio>

- **Memory Efficiency**: Streams process data in small chunks, avoiding memory overload.
- **Performance**: Reduces latency as data is sent in chunks.
- **Scalability**: Handles multiple large file requests without blocking event loops.
- **Use Cases**: Video/audio streaming, large file downloads, or reading large logs.

---

### **2. Understanding the Streams API**

<audio src="..\..\mp3\2024年12月18日20点50分.mp3"></audio>

Node.js provides different types of streams:
- **Readable Stream**: For reading data.
- **Writable Stream**: For writing data.
- **Duplex Stream**: For both reading and writing.
- **Transform Stream**: For modifying or transforming data as it is read or written.

For file streaming, we primarily use **Readable Streams**.

---

### **3. Streaming Large Files in NestJS**

#### **3.1. File Streaming Example**

This example demonstrates how to stream a large file (e.g., a video) to a client.

##### **Step 1: Create a Controller**

Create a controller to handle file streaming.

<audio src="..\..\mp3\2024年12月20日02点39分.mp3"></audio>

```typescript
import { Controller, Get, Res, HttpException, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { createReadStream, existsSync, statSync } from 'fs';
import { join } from 'path';

@Controller('files')
export class FilesController {
  @Get('stream')
  streamFile(@Res() res: Response) {
    const filePath = join(__dirname, '..', 'large-video.mp4'); // Path to the large file
    const fileExists = existsSync(filePath);

    if (!fileExists) {
      throw new HttpException('File not found', HttpStatus.NOT_FOUND);
    }

    const fileStats = statSync(filePath);
    const fileSize = fileStats.size;

    res.set({
      'Content-Type': 'video/mp4',
      'Content-Length': fileSize,
    });

    const fileStream = createReadStream(filePath);
    fileStream.pipe(res); // Stream the file to the response
  }
}
```

---

#### **Explanation:**

1. **`createReadStream`**:
   - Creates a readable stream from the file.

2. **`pipe(res)`**:
   - Pipes the stream directly to the HTTP response, sending data in chunks.

3. **`existsSync` and `statSync`**:
   - Checks if the file exists and retrieves its size for setting the correct headers.

4. **Headers**:
   - `Content-Type`: Specifies the type of file (e.g., `video/mp4`).
   - `Content-Length`: Specifies the size of the file for the client to handle the stream properly.

---

#### **3.2. Streaming with Range Requests (Partial Content)**

For video or audio streaming, you often need to support **range requests** so clients (e.g., media players) can request specific parts of the file.

##### **Controller Implementation**

<audio src="..\..\mp3\2024年12月20日02点44分.mp3"></audio>

```typescript
import { Controller, Get, Req, Res, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import { createReadStream, statSync } from 'fs';
import { join } from 'path';

@Controller('files')
export class FilesController {
  @Get('video')
  streamVideo(@Req() req: Request, @Res() res: Response) {
    const filePath = join(__dirname, '..', 'large-video.mp4');
    const fileStats = statSync(filePath);
    const fileSize = fileStats.size;

    const range = req.headers.range;

    if (!range) {
      // If no range header is sent, return the entire file
      res.status(400).send('Requires Range header');
      return;
    }

    const parts = range.replace(/bytes=/, '').split('-');
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

    if (start >= fileSize || end >= fileSize) {
      res.status(416).set({
        'Content-Range': `bytes */${fileSize}`,
      });
      return res.end();
    }

    const chunkSize = end - start + 1;

    res.set({
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunkSize,
      'Content-Type': 'video/mp4',
    });

    const fileStream = createReadStream(filePath, { start, end });
    fileStream.pipe(res); // Stream the requested chunk to the response
  }
}
```

---

#### **Explanation:**

1. **Range Header**:
   - The `Range` header specifies the byte range requested by the client (e.g., `bytes=0-1024`).

2. **Partial Content Response**:
   - Status `206` is used to indicate a partial content response.

3. **`Content-Range` Header**:
   - Indicates the range of bytes being sent (e.g., `bytes 0-1024/500000`).

4. **Stream Specific Chunk**:
   - `createReadStream` with `start` and `end` reads only the requested portion of the file.

---

### **4. Streaming Large Files from Cloud Storage**

If your files are stored in cloud services like **Amazon S3** or **Google Cloud Storage**, you can stream files directly from these services without downloading them to your server.

#### **Example: Streaming from Amazon S3**

<audio src="..\..\mp3\2024年12月20日02点49分.mp3"></audio>

1. Install the AWS SDK:

   ```bash
   npm install aws-sdk
   ```

2. Stream the file from S3:

   ```typescript
   import { Controller, Get, Res, Req } from '@nestjs/common';
   import { Request, Response } from 'express';
   import { S3 } from 'aws-sdk';
   
   @Controller('files')
   export class FilesController {
     private s3 = new S3({ region: 'us-east-1' }); // Replace with your region
   
     @Get('s3-video')
     async streamS3File(@Req() req: Request, @Res() res: Response) {
       const bucketName = 'your-bucket-name';
       const key = 'path/to/large-file.mp4';
   
       const range = req.headers.range;
   
       const params: S3.GetObjectRequest = {
         Bucket: bucketName,
         Key: key,
         Range: range, // Pass the Range header to S3
       };
   
       try {
         const s3Object = await this.s3.getObject(params).promise();
   
         res.set({
           'Content-Type': s3Object.ContentType,
           'Content-Length': s3Object.ContentLength,
           'Accept-Ranges': 'bytes',
           'Content-Range': s3Object.ContentRange,
         });
   
         s3Object.Body.pipe(res); // Stream the file directly to the client
       } catch (error) {
         res.status(404).send('File not found');
       }
     }
   }
   ```

---

### **5. Best Practices for Streaming Large Files**

<audio src="..\..\mp3\1. __Use Stream.mp3"></audio>

1. **Use Streams for Memory Efficiency**:
   - Avoid loading the entire file into memory when working with large files.

2. **Support Range Requests**:
   - Enables clients to request specific parts of the file (crucial for media streaming).

3. **Optimize Cloud Storage Access**:
   - Use services like S3 for scalable file storage and leverage direct streaming.

4. **Set Proper Headers**:
   - Always set `Content-Type`, `Content-Length`, and `Content-Range` headers to ensure compatibility with clients.

5. **Error Handling**:
   - Handle errors like missing files, invalid ranges, or storage service failures gracefully.

6. **Use a CDN**:
   - For frequently accessed files, use a **Content Delivery Network (CDN)** to offload traffic from your server.

---

### **6. Summary**

<audio src="..\..\mp3\Streaming large.mp3"></audio>

Streaming large files using the Streams API in NestJS is an efficient way to handle scenarios like video/audio streaming or serving large logs. Here’s a quick recap:

- Use **Node.js Streams** (`Readable` and `Writable`) to process files in chunks.
- Implement **Range Requests** for partial content streaming (e.g., for video players).
- Integrate with cloud storage services (e.g., S3, Google Cloud Storage) for scalability.
- Optimize performance by setting appropriate headers, supporting CDNs, and handling errors.

By adopting these techniques, your application can handle large file delivery efficiently, even under heavy load.