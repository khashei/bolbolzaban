import React from 'react';
import { Typography } from '@material-ui/core';
import helpStyles from './styles';

const ThirdSlide = () => (
  <div style={Object.assign({}, helpStyles.slide)}>
    <Typography paragraph variant="h6">
    اسامی خاص و کلمات جدید
    </Typography>
    <Typography paragraph>
      گاهی ممکنه که بلبل‌زبان نتونه بعضی از کلماتی رو که من بهش دادم بفهمه.
      مثلا وقتی یک اسم خاص یا یک کلمه جدید که توی شعر کهن فارسی نبوده استفاده کنم.
      مخصوصا وقتی بلبل‌زبان سعی کنه به سبک فردوسی همسُرایی کنه، هم
      از نظر وزن و هم از نظر کلمات محدودتره. مثلا توی این بیت من میخواستم اسم دوستم
      «بهنام» رو استفاده کنم و از بلبل زبان خواستم که برای مصرع دوم کمکم کنه:
    </Typography>
    <Typography paragraph variant="subtitle2">
    به بهنام گفتم بیا و ببین<br />
    ؟ ؟ ؟ ؟ ؟ ؟
    </Typography>
    <Typography paragraph>
    جواب اینطوری اومد:
    </Typography>
    <Typography paragraph variant="subtitle2">
    به «بهرام» گفتم بیا و ببین<br />
    زمین را ببوسید و کرد آفرین
    </Typography>
    <Typography paragraph>
    بگذریم که مصرع دوم عینا همون چیزیه که من میخواستم، ولی در مصرع اول کلمه بهنام با بهرام عوض شده.
    دلیلش اینه که بلبل زبان در شاهنامه نام بهنام رو هرگز ندیده.
    البته در این حالت سعی کرده که کلمه‌ای که دستکم هم هجا و متناسب با سایر کلمات باشه رو استفاده کنه.
    به این ترتیب و به عنوان مثال من میتونم از کلمه بهرام که هم وزن بهنام هست، برای همسُرایی استفاده کنم 
    و در نهایت خودم اون رو جایگزین کنم. 
    </Typography>
  </div>
);

export default ThirdSlide;
