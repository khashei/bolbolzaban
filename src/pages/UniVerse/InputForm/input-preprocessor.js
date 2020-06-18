class InputPreprocessor {
  static normalizeText(text) {
    return text
      .replace(/\?/g, '؟')
      .replace(/؟/g, ' ؟ ')
      .replace(/[\w+\d+۰۱۲۳۴۵۶۷۸۹٠١٢٣٤٥٦٧٨٩]/gi, ' ')
      .replace(/[/.?@%=&:#*^$<>()!;~|\\`-{}[\],٪×، ـ٫٬"]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  static wordCount = (text) => text.split(' ').filter((w) => w !== '').length;

  static process(firstMesra, secondMesra) {
    let hint = null;
    let normalizedFirstMesra = InputPreprocessor.normalizeText(firstMesra);
    let normalizedSecondMesra = InputPreprocessor.normalizeText(secondMesra);
    let m1WordCount = InputPreprocessor.wordCount(normalizedFirstMesra);
    let m2WordCount = InputPreprocessor.wordCount(normalizedSecondMesra);
    // return if no input
    if (m1WordCount === 0 && m2WordCount === 0) {
      return { normalizedFirstMesra, normalizedSecondMesra, hint };
    }
    if (m1WordCount === 0) {
      normalizedFirstMesra = Array(m2WordCount + 1)
        .join(' ؟')
        .trim();
      m1WordCount = m2WordCount;
    }
    if (m2WordCount === 0) {
      normalizedSecondMesra = Array(m1WordCount + 1)
        .join(' ؟')
        .trim();
      m2WordCount = m1WordCount;
    }
    if (m1WordCount < 3 || (m2WordCount < 3 && m2WordCount > 0)) {
      hint = 'هر مصرع حداقل سه کلمه است. بجای کلماتی که معلوم مشخص نشده بود «؟» اضافه شد.';
      if (m1WordCount < 3) {
        normalizedFirstMesra = `${normalizedFirstMesra} ${Array(4 - m1WordCount)
          .join(' ؟')
          .trim()}`;
      }
      if (m2WordCount < 3 && m2WordCount > 0) {
        normalizedSecondMesra = `${normalizedSecondMesra} ${Array(4 - m2WordCount)
          .join(' ؟')
          .trim()}`;
      }
    } else if (normalizedFirstMesra.indexOf('؟') < 0 && normalizedSecondMesra.indexOf('؟') < 0) {
      hint =
        'بجای بعضی از کلمات علامت سوال بگذارید تا بلبل‌زبان برای شما انتخاب‌های متنوعی پیشنهاد کند.';
    } else if (m1WordCount > 11 || m2WordCount > 11) {
      hint =
        'یک مصرع بطور معمول بین سه تا یازده کلمه است. برای گرفتن نتیجه بهتر طول مصرع را کوتاه کنید. ';
    } else if (Math.abs(m1WordCount - m2WordCount) > 4) {
      hint =
        'بطور معمول تعداد کلمات دو مصرع از یک بیت تقریبا برابرند. برای گرفتن نتیجه بهتر تعداد کلمات دو مصرع را با اضافه کردن «؟» متعادل کنید.';
    }
    return { normalizedFirstMesra, normalizedSecondMesra, hint };
  }
}

export default InputPreprocessor;
