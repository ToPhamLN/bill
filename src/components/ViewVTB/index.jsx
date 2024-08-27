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
    const units = [
      '',
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
    const tens = [
      '',
      'mười',
      'hai mươi',
      'ba mươi',
      'bốn mươi',
      'năm mươi',
      'sáu mươi',
      'bảy mươi',
      'tám mươi',
      'chín mươi'
    ];

    function readThreeDigits(num) {
      let hundred = Math.floor(num / 100);
      let ten = Math.floor((num % 100) / 10);
      let unit = num % 10;
      let result = '';

      if (hundred > 0) {
        result += `${units[hundred]} trăm `;
      }

      if (ten > 0) {
        result += `${tens[ten]} `;
      } else if (hundred > 0 && unit > 0) {
        result += 'lẻ ';
      }

      if (unit > 0) {
        if (unit === 5 && ten !== 0) {
          result += 'lăm';
        } else {
          result += units[unit];
        }
      }

      return result.trim();
    }

    function convertToWords(num) {
      if (num === 0) return 'Không đồng';

      const bigUnits = ['', 'nghìn', 'triệu', 'tỷ'];
      const parts = [];
      let i = 0;

      while (num > 0) {
        const chunk = num % 1000;
        if (chunk > 0) {
          const chunkInWords = readThreeDigits(chunk);
          const unit = bigUnits[i];
          parts.unshift(`${chunkInWords} ${unit}`.trim());
        }
        num = Math.floor(num / 1000);
        i++;
      }

      let result = parts.join(', ') + ' đồng';

      return result.charAt(0).toUpperCase() + result.slice(1);
    }

    return convertToWords(number).replace(/, đồng$/, ' đồng');
  }

  return (
    <div className='capture'>
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
    </div>
  );
};

export default ViewVTB;
