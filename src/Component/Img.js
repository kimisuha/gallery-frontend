import { useEffect } from 'react';
import $ from 'jquery';

import './image.scss';

export const Img = (props) => {
    const id = '#' + props.id;

    const clickToOpen = () => {
        //let btnclickto

        $(id).click(function (e) {
            e.preventDefault();
            $('.image').hide();
            /* $('.ima button').hide(); */
           /*  $('.ima').css('display', 'block'); */

            $('.btn').show();
            $(id).show();
            $(id).css({
                'width': '100vh',
                'height': '100vh',
                /* 'grid-column-start': 1,
                'grid-column-end': 4 */
            });

            //$(id).on("click", clickToClose);
            $(this).off();
        });

    }

    const clickToClose = () => {
        //let cls = id + " button";
        //console.log(cls)
        $('.btn').click(function (e) {
            e.preventDefault();
            $('.image').show();
            $('.ima button').show();
            $('.image button').hide();

            $('.ima').css('display', 'grid');

            $(id).height('50vh');
            $(id).width('50vh');
            $(id).css({
                'grid-column-start': 1,
                'grid-column-end': 1
            });

            $(id).on("click", clickToOpen);
            //$(this).off();
        });
    }

    /* const setImage = () => {
        let link = 'url(' + props.img.toString() + ')';
        // console.log(link);
        $(id).css({
            'background-image': link,
            'background-size': 'cover',
            'background-repeat': ' no-repeat'
        });
    } */

    useEffect(() => {
        clickToOpen();
        clickToClose();
        //setImage();
    });

    useEffect(() => {
        clickToOpen();
        $('.image button').hide();
        //setImage();
    }, []);

    //console.log('props', props.link);

    return (
        <div className='image' id={props.id}>
            <button className='btn' type='button' onClick={() => clickToClose()}>x</button>
            <img src={props.img} alt={props.id}></img>
        </div>
    );
}