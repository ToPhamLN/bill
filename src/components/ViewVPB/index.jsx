import React from 'react';
import logo from '../../assets/logos/vcb.webp';
import imageSrc from '~/assets/images/vpbank.png';

const ViewVPB = ({ form }) => {
  function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
  return (
    <div className='view vpbank'>
      <div className='background'>
        <img src={imageSrc} alt='' />
      </div>
      <div className='phone_time'>{form.phoneTime}</div>
      <div className='amount'>{`${formatNumber(parseInt(form.amount))} đ`}</div>
      <div className='bill_time'>{form.billTime}</div>
      <div className='recipient'>{form.recipientName}</div>
      <div className='account_number'>{form.accountNumber}</div>
      <div className='transaction_code'>{form.transactionCode}</div>
      <div className='transfer_note'>{form.transferNote}</div>
      <div className='transfer_type'>Chuyển nhanh napas 247</div>
    </div>
  );
};

export default ViewVPB;
