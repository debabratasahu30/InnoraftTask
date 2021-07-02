//animation list: flip, slice, box3D, pixel, fade, glide, card

$(document).ready(function () {

    $('.slideWiz').slideWiz({
        auto: true,
        speed: 5000,
        row: 12,
        col: 35,
        animation: [
            'flip',
            'slice',
            'box3D',
            'pixel',
            'fade',
            'glide',
            'card'
        ],
        file: [
            {
                src: {
                    cover: "Content/images/cover_1.jpg"
                },
                title: 'slideWiz Library - 1'
            },
            {
                src: {
                    cover: "Content/images/cover_2.jpg"
                },
                title: 'slideWiz Library - 2'
            },
            {
                src: {
                    cover: "Content/images/cover_3.jpg"
                },
                title: 'slideWiz Library - 3'
            },
            {
                src: {
                    cover: "Content/images/cover_4.jpg"
                },
                title: 'slideWiz Library - 4'
            }
        ]

    });

});
