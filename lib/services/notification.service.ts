import Swal from 'sweetalert2';

const successNotificationToast = (message: string = 'Action successful') => {
  return Swal.fire({
    text: message,
    icon: 'success',
    showConfirmButton: false,
    toast: true,
    position: 'top-end',
    timer: 3000,
  });
};

const failNotificationToast = (
  message: string = 'An error ocurred, try again later'
) => {
  return Swal.fire({
    text: message,
    icon: 'warning',
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
  });
};

const confirmModal = (
  data?: {
    title?: string;
    message?: string;
  },
  confirmButtonText = 'Continue',
  cancelButtonText = 'Cancel'
) => {
  return new Promise((resolve) => {
    Swal.fire({
      title: data?.title || 'You sure want to continue',
      text: data?.message || '',
      iconColor: '#EA4959',
      showCancelButton: true,
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText,
      confirmButtonColor: '#EA4959',
      reverseButtons: true,
      showCloseButton: true,
      customClass: {
        confirmButton: 'confirm-button-sa',
        cancelButton: 'confirm-button-sa outlined',
        closeButton: 'close-button-sa',
        actions: 'actions-container-sa',
        popup: 'popup-sa',
        htmlContainer: 'html-container-sa',
        title: 'title-sa',
      },
    }).then((resp) => {
      if (resp.isConfirmed) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
};

export { confirmModal, successNotificationToast, failNotificationToast };
