import BagIcon from '@/components/icon/BagIcon'
import CheckedIcon from '@/components/icon/CheckedIcon'
import UserIcon from '@/components/icon/UserIcon'
import OrderStep from '@/components/OrderStep'

const page = () => {
  const orderStatus = 0;

  const orderStepList = [
    {id: 0, title: 'سبد خرید', icon: <BagIcon color={orderStatus >= 0 ? 'white' : '#2F0D0C'} stroke={orderStatus >= 0 ? 'white' : '#2F0D0C'} />, status: 'complete'},
    {id: 1, title: 'ثبت اطلاعات کاربری', icon: <UserIcon color={orderStatus >= 1 ? 'white' : '#2F0D0C'} stroke={orderStatus >= 1 ? 'white' : '#2F0D0C'} />, status: 'active'},
    {id: 2, title: 'تکمیل خرید', icon: <CheckedIcon color={orderStatus >= 2 ? 'white' : '#2F0D0C'} stroke={orderStatus >= 2 ? 'white' : '#2F0D0C'} />, status: 'notActive'},
  ]

  return (
    <div>
        <section className='w-full h-40 flex flex-row justify-evenly items-center bg-[#F5F5F7] rounded-bl-4xl'>
            {
              orderStepList.map((step) => (
                <OrderStep key={step.id} id={step.id} title={step.title} icon={step.icon} step={orderStatus} />
              ))
            }
        </section>

        <section>

        </section>
    </div>
  )
}

export default page