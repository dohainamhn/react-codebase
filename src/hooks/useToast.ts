import { useRef } from 'react';
import { Theme, toast, ToastContent, ToastOptions } from 'react-toastify';

const ToastDefaultConfig: ToastOptions = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: true,
};

interface OverrideToastOption extends ToastOptions {
  message?: ToastContent;
  promise?: {
    callback: any;
    successMessage: string;
    errorMessage?: string;
    pendingMessage: string;
  };
}

const customToast = (props: OverrideToastOption) => {
  const { promise, message = '' } = props;
  const themeMode = localStorage.getItem('themeMode') || 'light';

  if (promise) {
    return toast.promise(
      promise.callback,
      {
        pending: promise.pendingMessage,
        success: promise.successMessage,
        error: {
          render: (error: any) => {
            return error.message;
          },
        },
      },
      {
        ...ToastDefaultConfig,
        ...props,
      },
    );
  }
  return toast(message, {
    ...ToastDefaultConfig,
    ...props,
    theme: themeMode as Theme,
  });
};

export const useToast = () => {
  const toastRef = useRef<any>();
  const createToast = (data: OverrideToastOption) => {
    // create toast
    toastRef.current = customToast(data);
    // clear toast queue
    toast.clearWaitingQueue(toastRef.current);
  };
  return {
    createToast,
    currentToast: toastRef.current,
  };
};
