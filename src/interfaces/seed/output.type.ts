export interface IBunAudioCodecListOutput {
  createdDate: string;
  lastModifiedDate: string;
  id: string;
  order: string;
  name: string;
}

export interface IBunCategoryListOutput {
  [key: string]: unknown;
}


export interface IBunSearchOutput {
  pageNumber: number;
  pageSize: number;
  total: number;
  totalPages: number;
  data: Record<any, any>[];
}


/**
 * @description It's all about douban info
 * @interface IBunDoubanInfoOutput
 */
export interface IBunDoubanInfoOutput {
  rating: {
    count: string;
    max: string;
    star_count: string;
    value: number;
  }
  lineticket_url: string;
  controversy_reason: string;
  pubdate: string[];
  last_episode_number: unknown;
  pic: {
    large: string;
    normal: string;
  }
  vendor_count: string;
  body_bg_color: string;
  is_tv: boolean;
  card_subtitle: string;
  intro: string;
  ticket_price_info: string;
  webisode_count: string;
  year: string;
  head_info: unknown;
  forum_info: unknown;
  webisode: unknown;
  id: string;
  gallery_topic_count: string;
  languages: string[];
  genres: string[];
  review_count: string;
  title: string;
  has_linewatch: boolean;
  ugc_tabs: { source: string; type: string; title: string }[];
  forum_topic_count: string;
  ticket_promo_text: string;
  webview_info: unknown[];
  is_released: boolean;
  vendors: unknown[];
  actors: { name: string }[];
  interest: unknown;
  episodes_count: string;
  color_scheme: {
    is_dark: boolean;
    primary_color_light: string;
    _base_color: number[];
    secondary_color: string;
    _avg_color: number[];
    primary_color_dark: string;
  }
  type: string;
  null_rating_reason: string;
  linewatches: unknown[];
  info_url: string;
  tags: unknown[];
  durations: string[];
  comment_count: string;
  cover: Record<string, any>;
  cover_url: string;
  restrictive_icon_url : string;
  header_bg_color : string;
  is_douban_intro : boolean;
  ticket_vendor_icons : string[]
  honor_infos : string[],
  sharing_url : string;
  subject_collections : string[],
  wechat_timeline_share : string;
  countries : string[];
  url : string;
  release_date : null,
  original_title : string;
  uri : string;
  pre_playable_date : null,
  episodes_info : string;
  subtype : string;
  directors : { name: string }[];
  is_show : boolean;
  in_blacklist : boolean;
  pre_release_desc : string;
  video : unknown;
  aka : string[];
  is_restrictive: boolean;
  trailer: Record<string, any>;
  vendor_icons: unknown[];
  [key: string]: unknown;
}


export interface IBunFileOutput {
  createdDate: string;
  lastModifiedDate: string;
  id: string;
  torrent: string,
  name: string;
  size: string;
}

export type IBunDownloadableTorrentUrlOutput = string;


/* ========================     IMDB         ========================== */
export interface IMDBParticipantInfo {
  imdb: string;
  name: string;
  role: string;
}

export interface IMDBExtraParticipantInfo extends IMDBParticipantInfo {
  credited: boolean;
  role_other: string[];
  thumb: string;
  photo: string;
}

export interface IBunIMDBInfoOutput {
  title: string;
  country: string[];
  director: IMDBParticipantInfo[];
  creator: IMDBParticipantInfo[];
  writing: IMDBParticipantInfo[];
  producer: IMDBParticipantInfo[];
  cast: IMDBExtraParticipantInfo[];
  plot: unknown[];
  plotoutline: string;
  composer: {imdb: string, name: string, role: string}[];
  genres: string[];
  comment: string;
  photo: { full: string, thumb: string };
  alsoknow: unknown[],
  tagline: string;
  runtime: string;
  year: string;
  votes: string;
  rating: number;
  language: string;
  languages: string[];
  awards: unknown[];
  [key: string]: unknown;
}


export interface IBunTorrentPeersOutput {
  id: string;
  createdDate: string;
  lastModifiedDate: string;
  memberId: string;
  torrentId: string;
  ip: string;
  box: boolean;
  ipv6: string;
  v6Box: boolean;
  location: string;
  agent: string;
  peerId: string;
  left: string;
  uploaded: string;
  downloaded: string;
  lastAction: string;
}
