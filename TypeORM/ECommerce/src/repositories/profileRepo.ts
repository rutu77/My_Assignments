import { AppDataSource } from "../config/database";
import { Profile } from "../entities/profile";

export const profileRepository= AppDataSource.getRepository(Profile)
// export const profileQueryBuilder= profileRepository.createQueryBuilder()