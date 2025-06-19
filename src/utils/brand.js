export const getWhatsAppLink = (
  phone = "8801611609288",
  message = "Hi, I’m interested in your services. Please get back to me."
) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
};


export const getPhoneNumber = () => "tel:+8801611609288";

export const getBrandName = () => "No Name";

export const getBrandLogo = () => "/Topper-IT-Logo-149x74.png";


