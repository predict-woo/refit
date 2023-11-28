import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Request,
  Post,
  UseGuards,
  SerializeOptions,
  Patch,
} from '@nestjs/common';

import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { InfoService } from './info.service';
import { Info } from './entities/info.entity';
import { AuthGuard } from '@nestjs/passport';
import { CreateInfoDto } from './dto/create-info.dto';

@ApiTags('Info')
@Controller({
  path: 'info',
  version: '1',
})
export class InfoController {
  constructor(private readonly infoService: InfoService) {}

  @ApiBearerAuth()
  @SerializeOptions({
    groups: ['me'],
  })
  @Get()
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  get(@Request() request): Promise<Info> {
    return this.infoService.findOne(request.user);
  }

  @ApiBearerAuth()
  @SerializeOptions({
    groups: ['me'],
  })
  @Post()
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  create(@Request() request, @Body() infoDto: CreateInfoDto): Promise<Info> {
    return this.infoService.create(request.user, infoDto);
  }

  @ApiBearerAuth()
  @SerializeOptions({
    groups: ['me'],
  })
  @Patch()
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  update(@Request() request, @Body() infoDto: CreateInfoDto): Promise<Info> {
    return this.infoService.update(request.user, infoDto);
  }
}
