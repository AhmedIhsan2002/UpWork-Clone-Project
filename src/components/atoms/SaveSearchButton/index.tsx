import * as React from 'react';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import SaveSearchButtonPopupContent from '../SaveSearchButtonPopupContent';
import { StyledButtonSaveSearch } from './style.js'
import FolderIcon from '@mui/icons-material/Folder';

export default function PopoverPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <StyledButtonSaveSearch variant="contained" {...bindTrigger(popupState)}>
            <FolderIcon sx={{ color: 'var(--primary-color)', fontSize:'16px' }} />
            Save Search
          </StyledButtonSaveSearch>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            sx={{ mt: 3, mr: 5 }} 
          >
            <Typography sx={{ p: 2 }}>
              <SaveSearchButtonPopupContent />
            </Typography>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}