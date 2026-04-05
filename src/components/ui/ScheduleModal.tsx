import { FormEvent, useEffect, useState } from 'react';
import Modal from 'react-modal';

interface IProp {
	isOpen: boolean;
	isClose: () => void;
	setIsModalOpen: (arg: boolean) => void;
}

const ScheduleModal = ({ isOpen, isClose, setIsModalOpen }: IProp) => {
	const [consultation, setConsultation] = useState({
		phone: '',
		name: '',
	});
	const [isSuccess, setIsSuccess] = useState(false);
	const [counter, setCounter] = useState(0);

	const handleSendData = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSuccess(true);
		setCounter(prev => prev + 1);
		setConsultation({
			phone: '',
			name: '',
		});
	};

	useEffect(() => {
		const timerId = setTimeout(() => {
			setIsSuccess(false);
			setIsModalOpen(false);
		}, 3000);

		return () => clearTimeout(timerId);
	}, [counter]);

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={isClose}
			style={{
				overlay: {
					position: 'fixed',
					inset: 0,
					backgroundColor: 'rgba(0,0,0,.8)',
					zIndex: 15,
				},
				content: {
					position: 'absolute',
					top: '50%',
					left: '50%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%',
					maxWidth: '450px',
					translate: '-50% -50%',
					background: '#fff',
					color: '#000',
					overflow: 'auto',
					WebkitOverflowScrolling: 'touch',
					outline: 'none',
					padding: '10px',
				},
			}}
			contentLabel='Modal window'
		>
			<button
				className='absolute top-2 right-2 cursor-pointer'
				onClick={isClose}
			>
				X
			</button>

			<div className='relative w-full'>
				<form
					className='flex flex-col  gap-5'
					onSubmit={handleSendData}
				>
					<h2 className='text-center text-[22px] font-bold'>
						Request a free Callback Consultation
					</h2>

					<fieldset className='w-full flex flex-col items-center gap-7'>
						<label
							htmlFor='clientPhone'
							className='w-[300px]'
						>
							<input
								className='w-full px-2 py-1 border'
								type='tel'
								name='clientPhone'
								id='clientPhone'
								value={consultation.phone}
								onChange={e =>
									setConsultation({ ...consultation, phone: e.target.value })
								}
								placeholder='Your number'
							/>
						</label>
						<label
							htmlFor='clientName'
							className='w-[300px]'
						>
							<input
								className='w-full px-2 py-1 border'
								type='text'
								name='clientName'
								id='clientName'
								value={consultation.name}
								onChange={e =>
									setConsultation({ ...consultation, name: e.target.value })
								}
								placeholder='Your name'
							/>
						</label>

						{isSuccess && (
							<p className='w-[300px] text-green-800 text-[12px] text-center'>
								Your information has been successfully submitted. We will
								contact you shortly.
							</p>
						)}

						<button
							className='w-[150px] h-[45px] px-1 rounded-[500px] text-sm transition-colors duration-300 ease-in-out self-center bg-[#000] text-[#fff] cursor-pointer'
							type='submit'
						>
							Send
						</button>
					</fieldset>
				</form>
			</div>
		</Modal>
	);
};

export default ScheduleModal;
