class OutputConverter {
  static convert(output) {
    // eslint-disable-next-line no-console
    console.log({ output });
    // return output.map((line) =>
    //   line.trim().replace('[BOM]', '\n(مصرع)').replace('[EOS]', '\n').replace('[SEP]', '\n')
    // );
    return output.map((line) =>
      line.trim().replace('[BOM]', '\n(مصرع)').replace('[EOS]', '\n').replace('[SEP]', '\n')
    );
  }
}

export default OutputConverter;
