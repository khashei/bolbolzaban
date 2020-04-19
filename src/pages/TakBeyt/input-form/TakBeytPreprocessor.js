export default class TakBeytPreprocessor {
  static normalizeText(text) {
    return text
      .replace(/\?/g, '؟')
      .replace(/؟/g, ' ؟ ')
      .replace(/[\w+\d+۰۱۲۳۴۵۶۷۸۹٠١٢٣٤٥٦٧٨٩]/gi, ' ')
      .replace(/[/.?@%=&:#*^$<>()!;~|\\`-{}[\],٪×، ـ٫٬"]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  static wordCount = text => text.split(' ').filter(w => w !== '').length;
  
  static process(firstMesraText, secondMesraText) {
    let hint = null;
    let firstMesra = TakBeytPreprocessor.normalizeText(firstMesraText);
    let secondMesra = TakBeytPreprocessor.normalizeText(secondMesraText);
    let m1WordCount = TakBeytPreprocessor.wordCount(firstMesra);
    let m2WordCount = TakBeytPreprocessor.wordCount(secondMesra);
    // return if no input
    if (m1WordCount === 0 && m2WordCount === 0) {
      return { firstMesra, secondMesra, hint };
    }
    if (m1WordCount === 0) {
      firstMesra = Array(m2WordCount + 1).join(' ؟').trim();
      m1WordCount = m2WordCount;
    }
    if (m2WordCount === 0) {
      secondMesra = Array(m1WordCount + 1).join(' ؟').trim();
      m2WordCount = m1WordCount;
    }
    if (m1WordCount < 3 || (m2WordCount < 3 && m2WordCount > 0)) {
      hint = 'هر مصرع حداقل سه کلمه است. بجای کلماتی که معلوم مشخص نشده بود «؟» اضافه شد.';
      if (m1WordCount < 3) {
        firstMesra = `${firstMesra} ${Array(4 - m1WordCount).join(' ؟').trim()}`;
      }
      if (m2WordCount < 3 && m2WordCount > 0) {
        secondMesra = `${secondMesra} ${Array(4 - m2WordCount).join(' ؟').trim()}`;
      }
    }
    else if (firstMesra.indexOf('؟') < 0 && secondMesra.indexOf('؟') < 0) {
      hint = 'بجای بعضی از کلمات علامت سوال بگذارید تا بلبل‌زبان برای شما انتخاب‌های متنوعی پیشنهاد کند.';
    }
    else if (m1WordCount > 10 || m2WordCount > 10) {
      hint = 'یک مصرع بطور معمول بین سه تا ده کلمه است. برای گرفتن نتیجه بهتر طول مصرع را کوتاه کنید. ';
    }
    else if (Math.abs(m1WordCount - m2WordCount) > 4) {
      hint = 'بطور معمول تعداد کلمات دو مصرع از یک بیت تقریبا برابرند. برای گرفتن نتیجه بهتر تعداد کلمات دو مصرع را با اضافه کردن «؟» متعادل کنید.';
    }
    return { firstMesra, secondMesra, hint };
  }
}
