export interface DummyScreenParams {
  name: string;
  backgroundColor: string;
  nextScreen: string;
  paddingBottom?: number;
}

export type MainTabsParams = {
  Home: DummyScreenParams;
  Wishlist: DummyScreenParams;
  Booking: DummyScreenParams;
  Message: DummyScreenParams;
};

export type StackScreenParams = {
  Home: undefined;
  WelCome: undefined;
  Signup: undefined;
  Login: undefined;
  ForgotPassword: undefined;
  ResetPassword: undefined;
  OtpSignUpNumber: undefined;
  OtpForgotPassword: undefined;
  SuccessPassword: undefined;
  SuccessNumber: undefined;
  Wishlist: undefined;
  Book: undefined;
  Chat: undefined;
  CurrentLocation: undefined;
  Profile: undefined;
  ProfileEdit: undefined;
  IdentityVerification: undefined;
  SelectProof: undefined;
  EmergencyContact: undefined;
  EmergencyContactDetail: undefined;
  SelectLanguage: undefined;
  MyRentalProperty: undefined;
  ActiveProperty: undefined;
  HistoryProperty: undefined;
  ChoosePaymentOption: undefined;
  PaymentMathod: undefined;
  AddPaymentMathod: undefined;
  ChangePassword: undefined;
  SafetyCenter: undefined;
  CallEmergencyServices: undefined;
  SelectCountry: undefined;
  HelpCenter: undefined;
  TermsofService: undefined;
  Feedback: undefined;
  Notification: undefined;
  PopularDetails: undefined;
  ConfirmPayProperty: undefined;
  PopularDestionation: undefined;
  chatDetails: undefined;
  Camera: undefined;
};
