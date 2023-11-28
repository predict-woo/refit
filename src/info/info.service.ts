import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Info } from './entities/info.entity';
import { Repository } from 'typeorm';
import { JwtPayloadType } from 'src/auth/strategies/types/jwt-payload.type';
import { CreateInfoDto } from './dto/create-info.dto';

@Injectable()
export class InfoService {
  constructor(
    @InjectRepository(Info)
    private infoRepository: Repository<Info>,
  ) {}

  async findOne(userJwtPayload: JwtPayloadType): Promise<Info> {
    const info = await this.infoRepository.findOne({
      where: { user: { id: userJwtPayload.id } },
    });

    if (!info) {
      throw new NotFoundException(`Info #${userJwtPayload.id} not found`);
    }

    return info;
  }

  async create(
    userJwtPayload: JwtPayloadType,
    infoDto: CreateInfoDto,
  ): Promise<Info> {
    const info = this.infoRepository.create({
      ...infoDto,
      user: { id: userJwtPayload.id },
    });
    return this.infoRepository.save(info);
  }

  async update(
    userJwtPayload: JwtPayloadType,
    infoDto: CreateInfoDto,
  ): Promise<Info> {
    const info = await this.infoRepository.findOne({
      where: { user: { id: userJwtPayload.id } },
    });

    if (!info) {
      throw new NotFoundException(`Info #${userJwtPayload.id} not found`);
    }

    info.yoe = infoDto.yoe;
    info.workoutFrequency = infoDto.workoutFrequency;
    info.workoutStyles = infoDto.workoutStyles;
    return this.infoRepository.save(info);
  }
}
