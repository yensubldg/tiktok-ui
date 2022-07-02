import bindClass from '~/utils/bindClass';
import styles from './Popper.module.scss';

const cx = bindClass(styles);

function Wrapper({ children }) {
	return <div className={cx('wrapper')}>{children}</div>;
}

export default Wrapper;
