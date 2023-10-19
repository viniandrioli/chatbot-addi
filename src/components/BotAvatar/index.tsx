import { default as AddiLogo } from '../../assets/addi-logo.png';
import { ImgContainer } from './BotAvatar.styled';
export const BotAvatar = () => {
  return (
<ImgContainer>
    <img src={AddiLogo} />
    </ImgContainer>
  )
}