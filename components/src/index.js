import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">


        <ApprovalCard>

            <div>
                <h4>Warning! </h4>
                Are your sure????
            </div>
        </ApprovalCard>

            <ApprovalCard>
                < CommentDetail
                    author="Alex"
                    timeAgo="Today at 4:45 PM"
                    post="Awesome Post!!!"
                    avatarImg={Faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                < CommentDetail
                    author="Nicole"
                    timeAgo="Today at 2:45 AM"
                    post="You are THE best!"
                    avatarImg={Faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                < CommentDetail
                    author="Jane"
                    timeAgo="Yesterday at 6:00 PM"
                    post="This is soooooo fun <3"
                    avatarImg={Faker.image.avatar()}
                />
            </ApprovalCard>
       </div>
    );
};




ReactDOM.render(<App/> , document.querySelector("#root"));