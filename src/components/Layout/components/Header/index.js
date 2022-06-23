import bindClass from '~/utils/bindClass';
import styles from './Header.module.scss';

const cx = bindClass(styles);

function Header() {
	return (
		<header className={cx('wrapper')}>
			<div className={cx('inner')}></div>
		</header>
	);
}

export default Header;
