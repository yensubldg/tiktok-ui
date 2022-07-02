import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';

import image from '~/assets/image';
import bindClass from '~/utils/bindClass';

const cx = bindClass(styles);

function Header() {
	const [searchResult, setSearchResult] = useState([]);

	useEffect(() => {
		setTimeout(() => {
			setSearchResult([1, 2, 3]);
		}, 0);
	}, []);

	return (
		<header className={cx('wrapper')}>
			<div className={cx('inner')}>
				<img
					src={image.logo}
					alt="Tik tok"
				/>
				<Tippy
					render={(attrs) => (
						<div
							className={cx('search-result')}
							tabIndex={-1}
							{...attrs}
						>
							<PopperWrapper>
								<h4 className={cx('search-title')}>Account</h4>
								<ul className={cx('')}></ul>
							</PopperWrapper>
						</div>
					)}
					visible={searchResult.length > 0}
					interactive={true}
				>
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
				</Tippy>
				<div className={cx('action')}></div>
			</div>
		</header>
	);
}

export default Header;
