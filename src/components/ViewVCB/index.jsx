import React from 'react';

const ViewVCB = ({ imageSrc, form }) => {
  console.log(form);
  return (
    <div className='view'>
      <div className='background'>
        <img src={imageSrc} alt='' />
      </div>
      <div className='success'>chuyển khoản thành công</div>
      <div className='amount'>{`${form.amount?.toLocaleString()} vnd`}</div>
      <div className='bill_time'>{form.billTime}</div>
    </div>
  );
};

export default ViewVCB;
