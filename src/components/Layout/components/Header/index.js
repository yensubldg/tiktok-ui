import bindClass from '~/utils/bindClass';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import image from '~/assets/image';

const cx = bindClass(styles);

function Header() {
	return (
		<header className={cx('wrapper')}>
			<div className={cx('inner')}>
				<div className={cx('logo')}>
					<img
						src={image.logo}
						alt="Tik tok"
					/>
				</div>
				<div className={cx('search')}>
					<input
						type="text"
						placeholder="Search accounts and videos"
						spellCheck={false}
					/>
					<button className={cx('clear-button')}>
						<FontAwesomeIcon icon={faCircleXmark} />
					</button>
					<FontAwesomeIcon
						className={cx('loading')}
						icon={faSpinner}
					/>
					<button className={cx('search-btn')}>
						<FontAwesomeIcon icon={faMagnifyingGlass} />
					</button>
				</div>
				<div className={cx('action')}></div>
			</div>
		</header>
	);
}

export default Header;
