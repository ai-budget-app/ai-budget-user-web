import { Button } from '@/shared/ui/Button';
import {
  CtaSectionContainer,
  CtaInner,
  CtaGradientBox,
  CtaTitle,
  CtaDescription,
} from './styles';

export const CtaSection = () => {
  return (
    <CtaSectionContainer>
      <CtaInner>
        <CtaGradientBox>
          <CtaTitle>Готовы начать?</CtaTitle>
          <CtaDescription>Присоединяйтесь к тысячам пользователей</CtaDescription>
          <Button variant="contained" size="large" sx={{ bgcolor: '#fff', color: '#2563eb', borderRadius: '999px', '&:hover': { bgcolor: '#eff6ff' } }}>
            Создать аккаунт
          </Button>
        </CtaGradientBox>
      </CtaInner>
    </CtaSectionContainer>
  );
};