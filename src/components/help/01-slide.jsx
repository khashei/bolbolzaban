import React from 'react';
import { Typography } from '@material-ui/core';
import helpStyles from './styles';
import BolbolzabanHelpImage from './help-image';
import screenShot from '../../../../../resources/images/help1.png';

const FirstSlide = () => (
  <div style={helpStyles.slide}>
    <Typography paragraph variant="h6">
    تا حالا سعی کردید شعر بگید؟
    </Typography>
    <Typography paragraph>
    من خیلی از خوندن شعر و بالاخص اشعار طنز لذت می‌برم، ولی متاسفانه طبع شعر قوی ندارم. 
    </Typography>
    <Typography paragraph>
    خیلی وقت‌ها پیش میاد که یک مصرع در موضوعی که در نظر دارم شعری راجع بهش بگم
    به ذهنم میاد و حتی چند کلمه‌ای از مصرع دوم، ولی بعد در ادامه دچار مشکل می‌شم:
    </Typography>
    <Typography paragraph variant="subtitle2">
    یکی مصرعی ناب در یاد من<br />بیامد ولی رفت ؟ ؟ ؟
    </Typography>
    <Typography paragraph>
    «همسُرایی» با «بُلبُل‌زبان» که یک سیستم مبتنی بر هوش ماشینی هست این مشکل رو برای من حل کرده.
    </Typography>
    <Typography paragraph>
    برای این کار الگوی بیتی رو که در نظر دارم،
    با قرار دادن علامت سوال بجای کلماتی که میخوام سروده بشن به بلبل‌زبان میدم
    و اون در جواب سعی می‌کنه با حفظ کلمات من جاهای خالی رو پر کنه:
    </Typography>
    <BolbolzabanHelpImage source={screenShot} />
  </div>
);

export default FirstSlide;
