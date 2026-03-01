export type HandleOptions = {
  onSuccess?: (values?: any) => void;
  onError?: (values?: any) => void;
  onSettled?: (values?: any) => void;
};
