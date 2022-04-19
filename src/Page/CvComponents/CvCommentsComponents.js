

const CvCommentsComponents = ({comments}) => {
const{id, name, email,body}=comments;

    return (
        <div>

        <div>

                {id}-{name}--{email}---{body}

        </div>

        </div>
    );
};

export {CvCommentsComponents};