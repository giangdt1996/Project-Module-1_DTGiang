const movies = [
  {
    id: 1,
    title: "AIR - THEO ĐUỔI MỘT HUYỀN THOẠI",
    director: "Ben Affleck",
    actors:
      "Matt Damon, Ben Affleck, Jason Bateman, Chris Messina, Matthew Maher, Marlon Wayans, Jay Mohr, Julius Tennon, Chris Tucker, Viola Davis",
    genre: "Tâm Lý",
    releaseDate: "14/04/2023",
    duration: "112 phút",
    language: "Tiếng Anh - Phụ đề Tiếng Việt",
    rating:
      "C16 - PHIM ĐƯỢC PHỔ BIẾN ĐẾN NGƯỜI XEM TỪ ĐỦ 16 TUỔI TRỞ LÊN (16+)",
    posterUrl:
      "https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/a/i/air_poster_vn_1_.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=0h9vZ52Vals",
    description:
      "Từ đạo diễn đã từng đoạt giải thưởng Ben Affleck, AIR hé lộ mối quan hệ đột phá giữa huyền thoại Michael Jordan khi mới bắt đầu sự nghiệp và bộ phận bóng rổ còn non trẻ của Nike,",
  },
  {
    id: 2,
    title: "ÂM VỰC CHẾT",
    director: "Alessandro Antonaci, Stefano Mandalà, Daniel Lascar",
    actors: "Lucia Caporaso, Guido Carta, Chiara Casolari",
    genre: "Kinh dị",
    releaseDate: "21/04/2023",
    duration: "93 phút",
    language: "Tiếng Ý - Phụ đề Tiếng Việt",
    rating:
      "C18 - PHIM ĐƯỢC PHỔ BIẾN ĐẾN NGƯỜI XEM TỪ ĐỦ 18 TUỔI TRỞ LÊN (18+)",
    posterUrl:
      "https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/7/0/700x1000_3_.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=CmBuZXqkyLM",
    description:
      "Sau cái chết của cha, Emma (Penelope Sangiorgi) vội bay từ New York về quê nhà ở Ý để lo hậu sự. Trong thời gian diễn ra tang lễ, Emma ở một mình trong căn nhà mà cha mẹ để lại. Lúc này, cô bị buộc phải đối mặt với một thực thể tà ác có khả năng kết nối thông qua một chiếc radio bị nguyền rủa",
  },
  {
    id: 3,
    title: "KHẮC TINH CỦA QUỶ",
    director: "Julius Avery",
    actors: " Russell Crowe, Franco Nero…",
    genre: "Kinh dị",
    releaseDate: "21/04/2023",
    duration: "104 phút",
    language: "Tiếng Anh - Phụ đề Tiếng Việt",
    rating:
      "C18 - PHIM ĐƯỢC PHỔ BIẾN ĐẾN NGƯỜI XEM TỪ ĐỦ 18 TUỔI TRỞ LÊN (18+)",
    posterUrl:
      "https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/p/o/pope_sexorcist_poster_h_m_ng_c.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=SXfnUAW9gwA",
    description: `Lấy cảm hứng từ những hồ sơ có thật của Cha Gabriele Amorth, Trưởng Trừ Tà của Vatican (Russell Crowe, đoạt giải Oscar®), bộ phim "The Pope's Exorcist" theo chân Amorth trong cuộc điều tra về vụ quỷ ám kinh hoàng của một cậu bé và dần khám phá ra những bí mật hàng thế kỷ mà Vatican đã cố gắng giấu kín`,
  },
  {
    id: 4,
    title: "ANH EM MARIO",
    director: "Aaron Horvath, Michael Jelenic",
    actors: "Chris Pratt, Anya Taylor-Joy, Charlie Day, …",
    genre: "Hài, Hoạt Hình, Phiêu Lưu",
    releaseDate: "21/04/2023",
    duration: "104 phút",
    language: "Tiếng Anh - Phụ đề Tiếng Việt",
    rating: "P - PHIM ĐƯỢC PHÉP PHỔ BIẾN ĐẾN NGƯỜI XEM Ở MỌI ĐỘ TUỔI.",
    posterUrl:
      "https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/s/u/super_mario_bros._payoff_poster.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=QcinmCfoh8E",
    description: `Câu chuyện về cuộc phiêu lưu của anh em Super Mario đến vương quốc Nấm.`,
  },
  {
    id: 5,
    title: "MẶT NẠ QUỶ",
    director: "Lawrence Fowler",
    actors: "Michaela Longden, Rebecca Phillipson, Tom Millen, Victor Mellors",
    genre: "Kinh dị",
    releaseDate: "21/04/2023",
    duration: " 102 phút",
    language: "Tiếng Anh - Phụ đề Tiếng Việt",
    rating:
      "C18 - PHIM ĐƯỢC PHỔ BIẾN ĐẾN NGƯỜI XEM TỪ ĐỦ 18 TUỔI TRỞ LÊN (18+)",
    posterUrl:
      "https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/m/a/main_poster_2__3.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=UJuqhPPEjhM",
    description: `Bí ẩn về cái chết của em gái Evie 20 năm trước còn bỏ ngỏ, vào lúc 09:09 hằng đêm, hàng loạt cuộc chạm trán kinh hoàng xảy ra.Liệu Margot có biết được sự thật ai là kẻ giết em gái mình?`,
  },
  {
    id: 6,
    title: "RENFIELD TAY SAI CỦA QUỶ",
    director: " Chris McKay",
    actors: " Nicolas Cage, Nicholas Hoult, Awkwafina",
    genre: "Hài, Kinh dị",
    releaseDate: "21/04/2023",
    duration: " 91 phút",
    language: "Tiếng Anh - Phụ đề Tiếng Việt",
    rating:
      "C18 - PHIM ĐƯỢC PHỔ BIẾN ĐẾN NGƯỜI XEM TỪ ĐỦ 18 TUỔI TRỞ LÊN (18+)",
    posterUrl:
      "https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/r/e/renfield_700x1000px.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=vXkN2H3Ijyw&t=79s",
    description: `Trong câu chuyện quái vật hiện đại về người hầu trung thành của Dracula,
      Renfield (do Nicholas Hoult thủ vai), kẻ bề tôi đáng thương của ông chủ tự ái nhất 
      lịch sử`,
  },
  {
    id: 7,
    title: "CHUYỆN TÔI VÀ MA QUỶ THÀNH NGƯỜI MỘT NHÀ",
    director: "Cheng Wei-hao",
    actors: "Greg Hsu, Austin Lin, Gingle Wang",
    genre: "Bí ẩn, Hài, Hành Động",
    releaseDate: "14/04/2023",
    duration: " 130 phút",
    language: "Tiếng Trung Quốc - Phụ đề Tiếng Việt",
    rating:
      "C18 - PHIM ĐƯỢC PHỔ BIẾN ĐẾN NGƯỜI XEM TỪ ĐỦ 18 TUỔI TRỞ LÊN (18+)",
    posterUrl:
      "https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/t/e/teaser_poster_1-marry-my-dead-body.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=kB3aMANGbiw",
    description: `Ming-Han là một cảnh sát nhiệt huyết. Một ngày nọ, 
      trong quá trình truy bắt tội phạm cùng người đồng nghiệp xinh đẹp Zi-Qing, 
      Ming-Han vô tình nhặt được một phong bao màu đỏ, và một nhóm người bất ngờ nhảy ra gọi anh 
      là "con rể". Họ yêu cầu anh ta kết hôn với đứa con đã chết của họ. Ming-Han không thể chấp 
      nhận quyết định này. Tuy nhiên, anh ấy sau đó anh ta gặp phải vô số sự cố xui xẻo. Điều đáng sợ hơn nữa là anh 
      ta bắt đầu nhìn thấy người chồng ma Mao-Mao của mình. Vì vậy, Ming-Han đã tìm đến thầy để tìm cách. `,
  },
];
