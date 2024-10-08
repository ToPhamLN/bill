import imageSrc from '~/assets/images/momo.png';

const ViewMomo = ({ form }) => {
  console.log(imageSrc);
  return (
    <div className='capture'>
      <div className='view momo'>
        <div className='background'>
          <img src={imageSrc} alt='' />
        </div>
        <div className='success'>Miễn phí</div>
        <div className='amount'>{`-${parseInt(form.amount)?.toLocaleString(
          'vi-VN'
        )}đ`}</div>
        <div className='bill_time'>{form.billTime}</div>
        <div className='recipient'>{form.recipientName}</div>
        <div className='account_number_1'>{form.accountNumber}</div>
        <div className='account_number_2'>{form.accountNumber}</div>

        <div className='transaction_code'>{form.transactionCode}</div>
        <div className='transfer_note'>{form.transferNote}</div>
      </div>
    </div>
  );
};

export default ViewMomo;
