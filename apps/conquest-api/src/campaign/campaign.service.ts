import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FindOneOptions } from 'typeorm';
//entities
import { Campaign } from './campaign.entity';

//dtos
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { UpdateCampaignDto } from './dto/update-campaign.dto';

@Injectable()
export class CampaignService {
  constructor(
    @InjectRepository(Campaign)
    private campaignRepository: Repository<Campaign>
  ) {}

  async create(
    createCampaignDto: CreateCampaignDto
  ): Promise<{ campaign: Campaign }> {
    const newCampaign = this.campaignRepository.create(createCampaignDto);
    const createdCampaign = await this.campaignRepository.save(newCampaign);
    return {
      campaign: createdCampaign,
    };
  }

  async findAll(): Promise<{ campaigns: Campaign[] }> {
    const campaigns = await this.campaignRepository.find();

    return {
      campaigns,
    };
  }

  async findOne(
    id: number,
    options?: FindOneOptions<Campaign>
  ): Promise<Campaign> {
    try {
      const campaign = await this.campaignRepository.findOne({
        where: { id },
        ...options,
      });
      console.log(`Campaign: ${JSON.stringify(campaign)}`);
      if (!campaign) {
        throw new NotFoundException(`Campaign with ID ${id} not found`);
      }
      return campaign;
    } catch (error) {
      console.error('Error in findOne:', error);
      throw error;
    }
  }

  // async findOne(id: number): Promise<{ campaign: Campaign }> {
  //   const campaign = await this.campaignRepository.findOne({
  //     where: { id: id },
  //   });

  //   return {
  //     campaign,
  //   };
  // }

  async update(
    id: number,
    updateCampaignDto: UpdateCampaignDto
  ): Promise<{ campaign: Campaign }> {
    const updatedCampaign = await this.campaignRepository.save({
      id,
      ...updateCampaignDto,
    });

    return {
      campaign: updatedCampaign,
    };
  }

  async remove(id: number): Promise<{ campaign: Campaign }> {
    const campaign = await this.campaignRepository.findOne({
      where: { id: id },
    });

    await this.campaignRepository.remove(campaign);

    return {
      campaign,
    };
  }

  async removeAll(): Promise<{ campaigns: Campaign[] }> {
    const campaigns = await this.campaignRepository.find();
    await this.campaignRepository.remove(campaigns);

    return {
      campaigns,
    };
  }

  async findByUserId(userId: number): Promise<{ campaigns: Campaign[] }> {
    const campaigns = await this.campaignRepository.find({
      where: { user: { id: userId } },
    });

    return {
      campaigns,
    };
  }

  async findByUserIdAndCampaignId(
    userId: number,
    campaignId: number
  ): Promise<{ campaign: Campaign }> {
    const campaign = await this.campaignRepository.findOne({
      where: { id: campaignId, user: { id: userId } },
    });

    return {
      campaign,
    };
  }

  async updateByUserIdAndCampaignId(
    userId: number,
    campaignId: number,
    updateCampaignDto: UpdateCampaignDto
  ): Promise<{ campaign: Campaign }> {
    const updatedCampaign = await this.campaignRepository.save({
      id: campaignId,
      ...updateCampaignDto,
    });

    return {
      campaign: updatedCampaign,
    };
  }

  async removeByUserIdAndCampaignId(
    userId: number,
    campaignId: number
  ): Promise<{ campaign: Campaign }> {
    const campaign = await this.campaignRepository.findOne({
      where: { id: campaignId, user: { id: userId } },
    });
    await this.campaignRepository.remove(campaign);

    return {
      campaign,
    };
  }

  async removeAllByUserId(userId: number): Promise<{ campaigns: Campaign[] }> {
    const campaigns = await this.campaignRepository.find({
      where: { user: { id: userId } },
    });
    await this.campaignRepository.remove(campaigns);

    return {
      campaigns,
    };
  }
}