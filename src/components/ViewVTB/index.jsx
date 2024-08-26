import React from 'react';
import logo from '../../assets/logos/vcb.webp';
import imageSrc from '~/assets/images/viettinbank.png';

const ViewVTB = ({ form }) => {
  const formatNumber = (number) => {
    const numStr = number.toString();
    const lastFourDigits = numStr.slice(-4);
    const maskedPart = '*'.repeat(numStr.length - 4);
    return maskedPart + lastFourDigits;
  };
  function convertNumberToWords(number) {
    const units = ['', 'nghìn', 'triệu', 'tỷ'];
    const numberWords = [
      'không',
      'một',
      'hai',
      'ba',
      'bốn',
      'năm',
      'sáu',
      'bảy',
      'tám',
      'chín'
    ];

    if (number === 0) return 'không đồng';

    let result = '';
    let unitIndex = 0;

    while (number > 0) {
      let threeDigits = number % 1000;
      if (threeDigits > 0) {
        let words = convertThreeDigits(threeDigits);
        result = words + ' ' + units[unitIndex] + ' ' + result;
      }
      unitIndex++;
      number = Math.floor(number / 1000);
    }

    return result.trim() + ' đồng';

    function convertThreeDigits(num) {
      let hundreds = Math.floor(num / 100);
      let tens = Math.floor((num % 100) / 10);
      let units = num % 10;

      let words = '';
      if (hundreds > 0) {
        words += numberWords[hundreds] + ' trăm ';
        if (tens === 0 && units > 0) {
          words += 'lẻ ';
        }
      }

      if (tens > 0) {
        if (tens === 1) {
          words += 'mười ';
        } else {
          words += numberWords[tens] + ' mươi ';
        }
      }

      if (units > 0) {
        if (tens > 0 && units === 5) {
          words += 'lăm';
        } else {
          words += numberWords[units];
        }
      }

      return words.trim();
    }
  }

  return (
    <div className='view viettinbank'>
      <div className='background'>
        <img src={imageSrc} alt='' />
      </div>
      <div className='phone_time'>{form.phoneTime}</div>
      <div className='amount'>{`${parseInt(
        form.amount
      )?.toLocaleString()} vnd`}</div>
      <div className='amount_text'>{`${convertNumberToWords(
        parseInt(form.amount)
      )}`}</div>
      <div className='bill_time'>{form.billTime}</div>
      <div className='recipient_sender'>{form.recipientNameSender}</div>
      <div className='account_number_sender'>
        {formatNumber(form.accountNumberSender)}
      </div>
      <div className='recipient'>{form.recipientName}</div>
      <div className='account_number'>{form.accountNumber}</div>
      <div className='transaction_code'>{form.transactionCode}</div>
      <div className='transfer_note'>{form.transferNote}</div>
    </div>
  );
};

export default ViewVTB;
