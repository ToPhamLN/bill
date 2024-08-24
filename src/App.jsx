import { useState } from 'react';
import './App.css';
import { Input, Select, Button } from '@chakra-ui/react';
import { EBank, ETransferType } from './constants/enum';
import vcbbank from './assets/images/vcbbank.png';
import viettinbank from './assets/images/viettinbank.png';
import vpbank from './assets/images/vpbank.png';

function App() {
  const [form, setForm] = useState({
    accountNumber: '1212004',
    recipientName: 'Nguyễn Văn A',
    amount: 100000,
    bankName: 'VCB',
    transferType: 'FAST',
    balanceNotification: false,
    phoneTime: '21:15',
    billTime: '21:15 Thứ Bảy 24/08/2024',
    transferNote: 'NGUYEN VAN B chuyen tien',
    transactionCode: '204951390'
  });
  const transferOptions = ['FAST', 'VIETCOMBANK'];

  const bankOptions = Object.keys(EBank).map((key) => ({
    value: key,
    label: EBank[key].context
  }));

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const imageSrc = vcbbank;

  console.log(form);
  return (
    <div className='main .light__theme'>
      <div className='container'>
        <div className='title'>
          <h1>Fake bill chuyển tiền ngân hàng</h1>
        </div>
        <div className='form'>
          <div className='item'>
            <label>Số tài khoản</label>
            <Input
              type='text'
              name='accountNumber'
              value={form.accountNumber}
              onChange={handleChange}
              placeholder='Ví dụ: 1212004'
            />
          </div>
          <div className='item'>
            <label>Tên người nhận</label>
            <Input
              type='text'
              name='recipientName'
              value={form.recipientName}
              onChange={handleChange}
              placeholder='Ví dụ: Nguyễn Văn A'
            />
          </div>
          <div className='item'>
            <label>Số tiền</label>
            <Input
              type='number'
              name='amount'
              value={form.amount}
              onChange={handleChange}
              placeholder='Ví dụ: 100000'
            />
          </div>
          <div className='item'>
            <label>Ngân hàng nhận</label>
            <Select
              name='bankName'
              value={form.bankName}
              onChange={handleChange}
            >
              {bankOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          </div>
          <div className='item'>
            <label>Loại chuyển tiền</label>
            <Select
              name='transferType'
              value={form.transferType}
              onChange={handleChange}
            >
              {transferOptions.map((option) => (
                <option key={option} value={option}>
                  {ETransferType[option]}
                </option>
              ))}
            </Select>
          </div>
          <div className='item'>
            <label>Thông báo số dư</label>
            <Select
              name='balanceNotification'
              value={form.balanceNotification}
              onChange={handleChange}
            >
              <option value={false}>Không</option>
              <option value={true}>Có</option>
            </Select>
          </div>
          <div className='item'>
            <label>Thời gian điện thoại</label>
            <Input
              type='text'
              name='phoneTime'
              value={form.phoneTime}
              onChange={handleChange}
              placeholder='Ví dụ: 21:15'
            />
          </div>
          <div className='item'>
            <label>Thời gian trên bill</label>
            <Input
              type='text'
              name='billTime'
              value={form.billTime}
              onChange={handleChange}
              placeholder='Ví dụ: 21:15 Thứ Bảy 24/08/2024'
            />
          </div>
          <div className='item'>
            <label>Nội dung chuyển khoản</label>
            <Input
              type='text'
              name='transferNote'
              value={form.transferNote}
              onChange={handleChange}
              placeholder='Ví dụ: NGUYEN VAN B chuyen tien'
            />
          </div>
          <div className='item'>
            <label>Mã giao dịch</label>
            <Input
              type='text'
              name='transactionCode'
              value={form.transactionCode}
              onChange={handleChange}
              placeholder='Ví dụ: 204951390'
            />
          </div>
        </div>
        <div className='control'>
          <Button colorScheme='yellow' className='btn'>
            Xem Bill
          </Button>
          <div className='view'>
            <div className='background'>
              <img src={imageSrc} alt='' />
            </div>
          </div>
          <Button colorScheme='blue' className='btn'>
            Tạo Bill
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
