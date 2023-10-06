export interface Root {
	StatusCode: number;
	Message: any;
	ExecutionTime: number;
	ResponseData: ResponseData;
}

export interface ResponseData {
	LatestUpdate: string;
	DataAge: number;
	Metros: Metro[];
	Buses: Bus[];
	Trains: any[];
	Trams: any[];
	Ships: any[];
	StopPointDeviations: any[];
}

export interface Metro {
	GroupOfLine: string;
	DisplayTime: string;
	TransportMode: string;
	LineNumber: string;
	Destination: string;
	JourneyDirection: number;
	StopAreaName: string;
	StopAreaNumber: number;
	StopPointNumber: number;
	StopPointDesignation: string;
	TimeTabledDateTime: string;
	ExpectedDateTime: string;
	JourneyNumber: number;
	Deviations: any;
}

export interface Bus {
	GroupOfLine: any;
	TransportMode: string;
	LineNumber: string;
	Destination: string;
	JourneyDirection: number;
	StopAreaName: string;
	StopAreaNumber: number;
	StopPointNumber: number;
	StopPointDesignation: any;
	TimeTabledDateTime: string;
	ExpectedDateTime: string;
	DisplayTime: string;
	JourneyNumber: number;
	Deviations: any;
}
