import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const GridSpacing = makeStyles((theme: Theme) =>
	createStyles({
		gridColspacing: {
			paddingBottom: '0px !important',
			paddingTop: '0px !important',
		}
	}),
);