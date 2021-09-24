const ERC20Mock = artifacts.require('ERC20Mock');
const ERC20DecimalsMock = artifacts.require('ERC20DecimalsMock');
const ERC20PermitMock = artifacts.require('ERC20PermitMock');
const ERC20BurnableMock = artifacts.require('ERC20BurnableMock');
const ERC20CappedMock = artifacts.require('ERC20CappedMock');
const ERC20FlashMintMock = artifacts.require('ERC20FlashMintMock');
const ERC3156FlashBorrowerMock = artifacts.require('ERC3156FlashBorrowerMock');
const ERC20PausableMock = artifacts.require('ERC20PausableMock');
const ERC20SnapshotMock = artifacts.require('ERC20SnapshotMock');
// const ERC20VotesMock = artifacts.require('ERC20VotesMock');
// const ERC20VotesCompMock = artifacts.require('ERC20VotesCompMock');
const ERC20WrapperMock = artifacts.require('ERC20WrapperMock');
const ERC20PresetFixedSupply = artifacts.require('ERC20PresetFixedSupply');
const ERC20PresetMinterPauser = artifacts.require('ERC20PresetMinterPauser');

const name = "Mistery";
const symbol = "MST";
const initialAccount = "0x1beb0aEb41AcA04467BF4FA9913a41188FF9C082";
const initialBalance = 10000;
const decimals = 9;
const cap = 1000000;
const enableReturn = true;
const enableApprove = true;
const underlyingToken = "0xd4e7779cee201b0FAbBD9f85104D3Bd5587463f4";
const owner = "0x1beb0aEb41AcA04467BF4FA9913a41188FF9C082";
const initialSupply = 10000;

module.exports = function (deployer) {
  deployer.deploy(ERC20Mock, name, symbol, initialAccount, initialBalance);
  deployer.deploy(ERC20DecimalsMock, name, symbol, decimals);
  deployer.deploy(ERC20PermitMock, name, symbol, initialAccount, initialBalance);
  deployer.deploy(ERC20BurnableMock, name, symbol, initialAccount, initialBalance);
  deployer.deploy(ERC20CappedMock, name, symbol, cap);
  deployer.deploy(ERC20FlashMintMock, name, symbol, initialAccount, initialBalance);
  deployer.deploy(ERC3156FlashBorrowerMock, enableReturn, enableApprove);
  deployer.deploy(ERC20PausableMock, name, symbol, initialAccount, initialBalance);
  deployer.deploy(ERC20SnapshotMock, name, symbol, initialAccount, initialBalance);
  // deployer.deploy(ERC20VotesMock, name, symbol);
  // deployer.deploy(ERC20VotesCompMock, name, symbol);
  deployer.deploy(ERC20WrapperMock, underlyingToken, name, symbol);
  deployer.deploy(ERC20PresetFixedSupply, name, symbol, initialSupply, owner);
  deployer.deploy(ERC20PresetMinterPauser, name, symbol);
};
