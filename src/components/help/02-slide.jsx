import React from 'react';
import { Typography } from '@material-ui/core';
import helpStyles from './styles';
import BolbolzabanHelpImage from './help-image';
import screenShot from '../../../../../resources/images/help2.png';

const SecondSlide = () => (
  <div style={helpStyles.slide}>
    <Typography paragraph >
     برای هر الگوی ورودی بلبل‌زبان چندین خروجی تولید میکنه که ممکنه من از یکی از اونها خوشم بیاد، 
     یا اینکه ازش ایده بگیرم و از ترکیباتش استفاده کنم و خودم بیتم رو تکمیل کنم.
    </Typography>
    <Typography paragraph variant="subtitle2">
      یکی مصرعی ناب در یاد من<br />بیامد ولی رفت از یاد من!
    </Typography>
    <Typography paragraph>
    بلبل‌زبان شعر گفتن رو از شاعران کهن یاد گرفته و میتونه سبک و وزن شعری اونها رو تقلید کنه. مثلا در مورد بیت بالا که در وزن شاهنامه هست، من از بلبل‌زبان درخواست کردم که در سبک فردوسی شعر بگه. انگار که فردوسی اومده و میخواد به من کمک کنه تا با هم شعر بگیم یا به اصطلاح بلبل‌زبان «همسُرایی» کنیم.
    </Typography>
    <BolbolzabanHelpImage source={screenShot} />
  </div>
);

export default SecondSlide;
