import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/schemas/user.schema';
import { LoginDto } from './DTO/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async validateUser(loginDto: LoginDto) {
    // Check if email exists in the database
    const user = await this.userModel.findOne({ email: loginDto.email }).select('+password').exec();

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    // Ensure password is provided and exists in database
    if (!loginDto.password || !user.password) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Compare provided password with hashed password in DB
    const isPasswordValid = await bcrypt.compare(loginDto.password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password');
    }

    // Create JWT token payload
    const payload = { userId: user._id, email: user.email };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
