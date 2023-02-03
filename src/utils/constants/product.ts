export interface IProduct {
  id: string;
  name: string;
  cover: string;
  description: string;
  country: string;
  artist: string;
  creatorIds: string[];
  status: string[];
  price: number;
  views: number;
  category: string;
}

export interface ILiveAuctionProduct {
  id: string;
  name: string;
  cover: string;
  timeToAuction: string;
  startingBid: number;
  highestBid: number;
}

export interface ITopBidProduct {
  id: string;
  name: string;
  cover: string;
  creator: string;
  date: string;
  highestBid: number;
  price: number;
}

export interface IUpcomingDropProduct {
  id: string;
  name: string;
  cover: string;
  description: string;
  creator: string;
  status: 'upcoming' | 'ended' | 'live';
}
