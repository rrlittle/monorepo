type BtnTheme = {
  backgroundColor: string;
};

type TextTheme = {
  color: string;
};

type Theme = {
  bg: {
    backgroundColor: string;
  };
  btn: BtnTheme;
  btnPrimary: BtnTheme;
  btnSecondary: BtnTheme;
  text: TextTheme;
  textPrimary: TextTheme;
  textSecondary: TextTheme;
};
