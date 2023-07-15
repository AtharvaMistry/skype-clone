import './practiceUI.css';
import myUser from './images/Screenshot 2023-05-10 124845 copy.png';
import { Link } from 'react-router-dom';

// antdesign
import { Button, Dropdown, MenuProps, AutoComplete, Input } from 'antd';
import { SearchOutlined, UserOutlined, FileOutlined, MessageOutlined, PhoneOutlined, BellOutlined, EllipsisOutlined, VideoCameraOutlined } from '@ant-design/icons';
const { Search } = Input;


// const
const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" class="text-decoration-none">
                setting
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com" class="text-decoration-none">
                Help
            </a>
        ),
    },
    {
        key: '3',
        label: (
            <Link to="/" target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com" class="text-decoration-none">Sign Out</Link>
        ),
    },
];

const renderTitle = (title: string) => (
    <span>
        {title}
        <a
            style={{ float: 'right' }}
            href="https://www.google.com/search?q=antd"
            target="_blank"
            rel="noopener noreferrer"
        >
            more
        </a>
    </span>
);

const renderItem = (title: string, count: number) => ({
    value: title,
    label: (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
            }}
        >
            {title}
            <span>
                <UserOutlined /> {count}
            </span>
        </div>
    ),
});

const options = [
    {
        label: renderTitle('Groups'),

    },
    {
        label: renderTitle('Peoples'),

    },
    {
        label: renderTitle('Messages'),

    },
];

function PracticeUI() {
    return (
        <>
            <div className="mainBox">

                <div className="box1">
                    <div className='box1a text-white'>
                        <div className='d-flex justify-content-around align-items-center'>
                            <img src={myUser} alt='' style={{ width: "30px" }} className='rounded' />
                            <div>

                                <p className='m-0 userName09'>jaimeen makavana</p>
                                <p className='m-0 userName08'>set a status</p>


                            </div>
                            <Dropdown menu={{ items }} placement="bottomRight" arrow={{ pointAtCenter: true }}>
                                <EllipsisOutlined className='searchIcon' />
                            </Dropdown>
                        </div>
                        <div className="d-flex justify-content-center align-items-center mt-2">
                            <AutoComplete
                                popupClassName="certain-category-search-dropdown"
                                dropdownMatchSelectWidth={500}
                                style={{ width: 250 }}
                                options={options}

                            >
                                <Input.Search size="medium" placeholder="People,Group or messages" className='h-50'/>
                            </AutoComplete>
                        </div>
                    </div>
                    {/* row2 left */}
                    <div className='box1b '>
                        <div className="row pt-3 rowLeft2 text-white">
                            <div className="col-3 p-0 d-flex flex-column align-items-center">
                                <MessageOutlined />
                                <p className='m-0'>Chats</p>
                            </div>
                            <div className="col-3 p-0 d-flex flex-column align-items-center">
                                <PhoneOutlined />
                                <p className='m-0'>Calls</p>
                            </div>
                            <div className="col-3 p-0 d-flex flex-column align-items-center">
                                <UserOutlined />
                                <p className='m-0'>Contacts</p>
                            </div>
                            <div className="col-3 p-0 d-flex flex-column align-items-center">
                                <BellOutlined />
                                <p className='m-0'>NotifyMe</p>
                            </div>
                        </div>
                    </div>
                    <div className='box1c'>
                        <div className="col-12 d-flex justify-content-around align-items-center pb-2 border-bottom">
                            <img src={myUser} alt='' style={{ width: "30px" }} className='rounded' />
                            <div className="contactMadeP">
                                <p className='m-0'>jaimeen makavana</p>
                                <p className='m-0'>typed messages here</p>
                            </div>
                            <p className='m-0'>fri</p>
                        </div>
                        <div className="col-12 d-flex justify-content-around align-items-center pb-2 border-bottom">
                            <img src={myUser} alt='' style={{ width: "30px" }} className='rounded' />
                            <div className="contactMadeP">
                                <p className='m-0'>jaimeen makavana</p>
                                <p className='m-0'>typed messages here</p>
                            </div>
                            <p className='m-0'>fri</p>
                        </div>
                        <div className="col-12 d-flex justify-content-around align-items-center pb-2 border-bottom">
                            <img src={myUser} alt='' style={{ width: "30px" }} className='rounded' />
                            <div className="contactMadeP">
                                <p className='m-0'>jaimeen makavana</p>
                                <p className='m-0'>typed messages here</p>
                            </div>
                            <p className='m-0'>fri</p>
                        </div>
                        <div className="col-12 d-flex justify-content-around align-items-center pb-2 border-bottom">
                            <img src={myUser} alt='' style={{ width: "30px" }} className='rounded' />
                            <div className="contactMadeP">
                                <p className='m-0'>jaimeen makavana</p>
                                <p className='m-0'>typed messages here</p>
                            </div>
                            <p className='m-0'>fri</p>
                        </div>
                        <div className="col-12 d-flex justify-content-around align-items-center pb-2 border-bottom">
                            <img src={myUser} alt='' style={{ width: "30px" }} className='rounded' />
                            <div className="contactMadeP">
                                <p className='m-0'>jaimeen makavana</p>
                                <p className='m-0'>typed messages here</p>
                            </div>
                            <p className='m-0'>fri</p>
                        </div>
                        <div className="col-12 d-flex justify-content-around align-items-center pb-2 border-bottom">
                            <img src={myUser} alt='' style={{ width: "30px" }} className='rounded' />
                            <div className="contactMadeP">
                                <p className='m-0'>jaimeen makavana</p>
                                <p className='m-0'>typed messages here</p>
                            </div>
                            <p className='m-0'>fri</p>
                        </div>
                        <div className="col-12 d-flex justify-content-around align-items-center pb-2 border-bottom">
                            <img src={myUser} alt='' style={{ width: "30px" }} className='rounded' />
                            <div className="contactMadeP">
                                <p className='m-0'>jaimeen makavana</p>
                                <p className='m-0'>typed messages here</p>
                            </div>
                            <p className='m-0'>fri</p>
                        </div>
                        <div className="col-12 d-flex justify-content-around align-items-center pb-2 border-bottom">
                            <img src={myUser} alt='' style={{ width: "30px" }} className='rounded' />
                            <div className="contactMadeP">
                                <p className='m-0'>jaimeen makavana</p>
                                <p className='m-0'>typed messages here</p>
                            </div>
                            <p className='m-0'>fri</p>
                        </div>
                        <div className="col-12 d-flex justify-content-around align-items-center pb-2 border-bottom">
                            <img src={myUser} alt='' style={{ width: "30px" }} className='rounded' />
                            <div className="contactMadeP">
                                <p className='m-0'>jaimeen makavana</p>
                                <p className='m-0'>typed messages here</p>
                            </div>
                            <p className='m-0'>fri</p>
                        </div>
                        <div className="col-12 d-flex justify-content-around align-items-center pb-2 border-bottom">
                            <img src={myUser} alt='' style={{ width: "30px" }} className='rounded' />
                            <div className="contactMadeP">
                                <p className='m-0'>jaimeen makavana</p>
                                <p className='m-0'>typed messages here</p>
                            </div>
                            <p className='m-0'>fri</p>
                        </div>
                        <div className="col-12 d-flex justify-content-around align-items-center pb-2 border-bottom">
                            <img src={myUser} alt='' style={{ width: "30px" }} className='rounded' />
                            <div className="contactMadeP">
                                <p className='m-0'>jaimeen makavana</p>
                                <p className='m-0'>typed messages here</p>
                            </div>
                            <p className='m-0'>fri</p>
                        </div>
                        <div className="col-12 d-flex justify-content-around align-items-center pb-2 border-bottom">
                            <img src={myUser} alt='' style={{ width: "30px" }} className='rounded' />
                            <div className="contactMadeP">
                                <p className='m-0'>jaimeen makavana</p>
                                <p className='m-0'>typed messages here</p>
                            </div>
                            <p className='m-0'>fri</p>
                        </div>
                        <div className="col-12 d-flex justify-content-around align-items-center pb-2 border-bottom">
                            <img src={myUser} alt='' style={{ width: "30px" }} className='rounded' />
                            <div className="contactMadeP">
                                <p className='m-0'>jaimeen makavana</p>
                                <p className='m-0'>typed messages here</p>
                            </div>
                            <p className='m-0'>fri</p>
                        </div>
                        <div className="col-12 d-flex justify-content-around align-items-center pb-2 border-bottom">
                            <img src={myUser} alt='' style={{ width: "30px" }} className='rounded' />
                            <div className="contactMadeP">
                                <p className='m-0'>jaimeen makavana</p>
                                <p className='m-0'>typed messages here</p>
                            </div>
                            <p className='m-0'>fri</p>
                        </div>
                        <div className="col-12 d-flex justify-content-around align-items-center pb-2 border-bottom">
                            <img src={myUser} alt='' style={{ width: "30px" }} className='rounded' />
                            <div className="contactMadeP">
                                <p className='m-0'>jaimeen makavana</p>
                                <p className='m-0'>typed messages here</p>
                            </div>
                            <p className='m-0'>fri</p>
                        </div>
                        <div className="col-12 d-flex justify-content-around align-items-center pb-2 border-bottom">
                            <img src={myUser} alt='' style={{ width: "30px" }} className='rounded' />
                            <div className="contactMadeP">
                                <p className='m-0'>jaimeen makavana</p>
                                <p className='m-0'>typed messages here</p>
                            </div>
                            <p className='m-0'>fri</p>
                        </div>


                    </div>
                </div>
                {/* box 2 */}
                <div className="box2">
                    <div className='box2a d-flex align-items-center justify-content-around'>
                        <div className="col-7 d-flex align-items-center ps-2 text-white">
                            <img src={myUser} alt='' style={{ width: "30px" }} className='rounded' />
                            <p className='m-0 ms-3'>Jaimeen Makavana</p>
                        </div>
                        <div className="col-5 text-white d-flex align-items-center justify-content-between pe-2 headerRight">
                            <SearchOutlined />
                            <FileOutlined />
                            <VideoCameraOutlined />
                            <PhoneOutlined />
                        </div>
                    </div>
                    <div className='box2b d-flex flex-column mt-1'>
                        <p className='send'>jdfdfkejf efnfjne efwf</p>
                        <p className='recieve'>dcn wnie wsjcnweekm ewmweoim</p>
                        <p className='send'>jdfdfkejf efnfjne efwf</p>
                        <p className='recieve'>dcn wnie wsjcnweekm ewmweoim</p>
                        <p className='send'>jdfdfkejf efnfjne efwf</p>
                        <p className='recieve'>dcn wnie wsjcnweekm ewmweoim</p>
                        <p className='send'>jdfdfkejf efnfjne efwf</p>
                        <p className='recieve'>dcn wnie wsjcnweekm ewmweoim</p>
                        <p className='send'>jdfdfkejf efnfjne efwf</p>
                        <p className='recieve'>dcn wnie wsjcnweekm ewmweoim</p>
                        <p className='send'>jdfdfkejf efnfjne efwf</p>
                        <p className='recieve'>dcn wnie wsjcnweekm ewmweoim</p>
                        <p className='send'>jdfdfkejf efnfjne efwf</p>
                        <p className='recieve'>dcn wnie wsjcnweekm ewmweoim</p>
                        <p className='send'>jdfdfkejf efnfjne efwf</p>
                        <p className='recieve'>dcn wnie wsjcnweekm ewmweoim</p>
                        <p className='send'>jdfdfkejf efnfjne efwf</p>
                        <p className='recieve'>dcn wnie wsjcnweekm ewmweoim</p>
                        <p className='send'>jdfdfkejf efnfjne efwf</p>
                        <p className='recieve'>dcn wnie wsjcnweekm ewmweoim</p>
                        <p className='send'>jdfdfkejf efnfjne efwf</p>
                        <p className='recieve'>dcn wnie wsjcnweekm ewmweoim</p>
                        <p className='send'>jdfdfkejf efnfjne efwf</p>
                        <p className='recieve'>dcn wnie wsjcnweekm ewmweoim</p>
                        <p className='send'>jdfdfkejf efnfjne efwf</p>
                        <p className='recieve'>dcn wnie wsjcnweekm ewmweoim</p>
                        <p className='send'>jdfdfkejf efnfjne efwf</p>
                        <p className='recieve'>dcn wnie wsjcnweekm ewmweoim</p>
                        <p className='send'>jdfdfkejf efnfjne efwf</p>
                        <p className='recieve'>dcn wnie wsjcnweekm ewmweoim</p>
                        <p className='send'>jdfdfkejf efnfjne efwf</p>
                        <p className='recieve'>dcn wnie wsjcnweekm ewmweoim</p>

                    </div>
                    <div className='box2c d-flex align-items-center justify-content-around p-2'>
                        <div className="col-6 typingArea">
                            <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton className='' />
                        </div>
                        <div className="col-6 text-white d-flex align-items-center justify-content-between iconFooter4 ps-3">
                            <SearchOutlined />
                            <FileOutlined />
                            <VideoCameraOutlined />
                            <PhoneOutlined />
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}
export default PracticeUI;