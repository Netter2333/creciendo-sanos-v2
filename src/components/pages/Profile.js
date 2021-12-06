import React, { useState } from 'react';
import Carditem from '../Carditem';
import '../Cards.css';

function Profile() {
	return (
		<div className='cards'>
			<div className='cards__container'>
				<div className='cards__wrapper'>
					<ul className='cards__items'>
						<Carditem
							src='/images/georgio.jpg'
							text='Georgio'
							path='/child-profile'
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Profile;
