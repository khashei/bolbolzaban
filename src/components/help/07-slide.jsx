import React from 'react';
import { Typography } from '@material-ui/core';
import helpStyles from './styles';
import screenShot from '../../../../../resources/images/help3.png';
import BolbolzabanHelpImage from './help-image';

const EighthSlide = () => (
  <div style={Object.assign({}, helpStyles.slide)}>
    <Typography paragraph variant="h6">
    امتحان کنید
    </Typography>
    <Typography paragraph>
    حالا وقتشه که شما هم با بلبل‌زبان همسُرایی کنید.
     برای شروع بهتره بیتی از شاهنامه رو از وب سایت نوسخن بردارید با
     جایگزینی بعضی از کلمات اون با علامت سوال ابیات جدید درست کنید. 
    </Typography>
    <Typography paragraph>
    همینطور میتونید الگوهای نمونه‌ای رو با زدن دکمه‌ی «الگوی نمونه» آزمایش کنید.
    </Typography>
    <BolbolzabanHelpImage source={screenShot} />
    <Typography paragraph>
    در نهایت می‌تونید الگوی ورودی خودتون رو با الهام از نتایج همسُرایی تغییر بدید و با تکرار این کار نتیجه رو بهبود بدید.
    </Typography>
    {/* <Typography paragraph>
    شعر‌های جالبی رو که درست کردید توی سایت درباره برای ما بفرستید تا در کانال بلبل‌زبان با بقیه علاقمندان به اشتراک گذاشته بشه.
    </Typography> */}
  </div>
);

export default EighthSlide;
