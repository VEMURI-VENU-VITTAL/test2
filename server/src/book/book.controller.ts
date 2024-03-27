import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    UploadedFile,
    UseInterceptors,
  } from '@nestjs/common';
  import { BookService } from './book.service';
  import { CreateBookDto } from './dto/create-book.dto';
  import { UpdateBookDto } from './dto/update-book.dto';
  import { Book } from './schemas/book.schema';
import { FileInterceptor } from '@nestjs/platform-express';
  
  @Controller('books')
  export class BookController {
    constructor(private bookService: BookService) {}
  
    @Get()
    async getAllBooks(): Promise<Book[]> {
        console.log(Book.name);
      return this.bookService.findAll();
    }
  


    // @Post()
    // @UseInterceptors(FileInterceptor('file'))
    // async createBook(
    //   @Body()
    //   book: CreateBookDto,
    //   @UploadedFile() file: Express.Multer.File
    // ): Promise<Book> {
    //   console.log(file);
    //   return this.bookService.create(book);
    // }

    
    @Post()
    @UseInterceptors(FileInterceptor('file'))
    async createBook(
      // @Body()
      // book: CreateBookDto,
      @UploadedFile() file: Express.Multer.File
    ): Promise<any> {
      console.log(file);
      return {
        meassage:file
      }
      // return this.bookService.create(book);
    }

  
    @Get(':id')
    async getBook(
      @Param('id')
      id: string,
    ): Promise<Book> {
      return this.bookService.findById(id);
    }
  
    @Put(':id')
    async updateBook(
      @Param('id')
      id: string,
      @Body()
      book: UpdateBookDto,
    ): Promise<Book> {
      return this.bookService.updateById(id, book);
    }
  
    @Delete(':id')
    async deleteBook(
      @Param('id')
      id: string,
    ): Promise<Book> {
      return this.bookService.deleteById(id);
    }
  }