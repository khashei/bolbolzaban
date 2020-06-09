class OutputConverter {
  static convert(output) {
    return output.map((line) =>
      line.replace('[EOS]', '').replace('[SEP]', '').replace('[BOM]', '(مصرع)').trim()
    );
  }
}

export default OutputConverter;
