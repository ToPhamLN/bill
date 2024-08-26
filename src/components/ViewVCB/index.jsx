import React from 'react';
import logo from '../../assets/logos/vcb.webp';
import imageSrc from '~/assets/images/vcbbank.png';

const ViewVCB = ({ form }) => {
  return (
    <div className='view vietcombank'>
      <div className='background'>
        <img src={imageSrc} alt='' />
      </div>
      <div className='phone_time'>{form.phoneTime}</div>
      {/* <div className='logo'>
        <img src={logo} alt='' />
      </div> */}
      <div className='success'>Chuyển khoản thành công</div>
      <div className='amount'>{`${parseInt(
        form.amount
      )?.toLocaleString()} vnd`}</div>
      <div className='bill_time'>{form.billTime}</div>
      <div className='recipient'>
        <h1>{form.recipientName}</h1>
      </div>
      <div className='account_number'>{form.accountNumber}</div>
      <div className='transaction_code'>{form.transactionCode}</div>
      <div className='transfer_note'>{form.transferNote}</div>
    </div>
  );
};

export default ViewVCB;
