export const getQR = (data) => {
  
  const fixedtext = (text) => text.trim().replace(/ +/g, '%20');
  
  return fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${fixedtext(data)}`, {
    method: 'GET'
  })
  .then(res => {
    if (res.status !== 200) {
      const error = 'Ошибка при получении QR-кода'
      return error
    }
    return res.blob()
  })
  .then(image => image.url)
}
// https://api.stakdek.de/api/qr/gen?data=${fixedtext(data)}
