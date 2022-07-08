import { IfcViewerAPI } from 'web-ifc-viewer';
import { Backdrop, CircularProgress, IconButton } from '@material-ui/core';
import React from 'react';
import Dropzone from 'react-dropzone';
import BcfDialog from './BcfDialog';

//Icons
import FolderOpenOutlinedIcon from '@material-ui/icons/FolderOpenOutlined';
import SaveAltOutlined from '@material-ui/icons/SaveAltOutlined';
import ViewDayOutlined from '@material-ui/icons/ViewDayOutlined';
import CropIcon from '@material-ui/icons/Crop';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';
import FeedbackOutlinedIcon from '@material-ui/icons/FeedbackOutlined';

class IFC_Page extends React.Component {

    state = {
        bcfDialogOpen: false,
        loaded: false,
        loading_ifc: false
    };

    constructor(props) {
        super(props);
        this.dropzoneRef = React.createRef();
    }

    componentDidMount() {
        const container = document.getElementById('viewer-container');
        const viewer = new IfcViewerAPI({container});
        
        viewer.axes.setAxes(1);
        viewer.grid.setGrid(50, 20, `#696969`, `#d3d3d3`);
        viewer.IFC.setWasmPath('../../../../');

        this.viewer = viewer;

        window.onmousemove = viewer.prepickIfcItem;
        window.ondblclick = viewer.clipper.createPlane;
        
    }

    onDrop = async (files) => {
        this.setState({ loading_ifc: true })
        await this.viewer.IFC.loadIfc(files[0], true);
        this.setState({ loaded: true, loading_ifc: false })
    };

    handleToggleClipping = () => {
        this.viewer.clipper.active = !this.viewer.clipper.active;
    };

    handleClickOpen = () => {
        this.dropzoneRef.current.open();
    };

    handleClick_ = () => {
        console.log('Button Clicked');
    };

    handleClickClear = () => {
        this.viewer.IFC.dispose();
        
        const container = document.getElementById('viewer-container');
        container.innerHTML = "";
        this.viewer = new IfcViewerAPI({container});
        
        this.viewer.axes.setAxes(1);
        this.viewer.grid.setGrid(50, 20, `#696969`, `#d3d3d3`);

        this.viewer.IFC.setWasmPath('../../../../');
        
        window.onmousemove = this.viewer.prepickIfcItem;
        window.ondblclick = this.clipper.createPlane;
    };


    handleOpenBcfDialog = () => {
        this.setState({
            ...this.state,
            bcfDialogOpen: true
        });
    };

    handleCloseBcfDialog = () => {
        this.setState({
            ...this.state,
            bcfDialogOpen: false
        });
    };

    handleOpenViewpoint = (viewpoint) => {
        this.viewer.currentViewpoint = viewpoint;
    };

    render() {
        return (
          <div style={{backgroundColor:'lightgray'}}>
              {/* <BcfDialog
                open={this.state.bcfDialogOpen}
                onClose={this.handleCloseBcfDialog}
                onOpenViewpoint={this.handleOpenViewpoint}
              /> */}
              <div style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
                  <div style={{ flex: '1 1 auto', minWidth: 0 }}>
                    <div style={{height:'7%', backgroundColor:'lightgray', display: 'grid', alignContent: 'space-evenly', justifyContent: 'center', justifyItems: 'right', gridTemplateColumns: '0.1fr 0.1fr 0.1fr 0.1fr 0.1fr 1fr 0.1fr'}}>
                        <IconButton onClick={this.handleClickOpen}>
                            <FolderOpenOutlinedIcon /> 
                        </IconButton>
                        <IconButton onClick={this.handleToggleClipping}>
                            <CropIcon />
                        </IconButton>
                        <IconButton onClick={this.handleClick_} disabled={true}>
                            <SaveAltOutlined />
                        </IconButton>
                        <IconButton onClick={this.handleClick_} disabled={true}>
                            <ViewDayOutlined />
                        </IconButton>
                        <IconButton onClick={this.handleClick_} disabled={true}>
                            <FeedbackOutlinedIcon />
                        </IconButton>
                        <IconButton onClick={this.handleClickClear} disabled={false}>
                            <ClearOutlinedIcon />
                        </IconButton>
                    </div>                    
                    <Dropzone ref={this.dropzoneRef} noClick={true} noKeyboard={true} onDrop={this.onDrop}>
                        {({ getRootProps, getInputProps }) => (
                            <div {...getRootProps({ })}>
                                <input {...getInputProps()} />
                                <div id='viewer-container' style={{ position: 'absolute', height: '93%', width: '100%' }}/>
                            </div>
                        )}
                    </Dropzone>
                  </div>
              </div>
              <Backdrop
                style={{
                    zIndex: 100,
                    display: "flex",
                    alignItems: "center",
                    alignContent: "center"
                }}
                open={this.state.loading_ifc}
              >
                  <CircularProgress/>
              </Backdrop>
          </div>
        );
    }
}

export default IFC_Page;

