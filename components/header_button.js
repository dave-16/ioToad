import Link from 'next/link'

export const HeaderButton = ({name, url}) => (
    <>
        <div style={{ color: '#f8f172' }}>
            <Link href={`/${url}`} scroll={false}>
                <div className="header_button">
                    <p style={{margin: '2px', fontSize: '20px', textAlign: 'center'}}>{name}</p>
                </div>
            </Link>
        </div>
    </>
);