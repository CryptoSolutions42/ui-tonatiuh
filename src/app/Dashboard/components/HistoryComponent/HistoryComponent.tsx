import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppSagaAction } from '@/redux/saga/app-saga/saga-actions';
import { RootState } from '@/redux/store';
import { appStoreActions } from '@/redux/reducer/app-reducer/reducer';
import { SessionType } from '@/redux/types';

export const HistoryComponent: React.FC<{ allSession: SessionType[] }> = ({ allSession }) => {
  const dispatch = useDispatch();
  const { ordersForHistory } = useSelector((state: RootState) => state.AppReducer);

  useEffect(() => {
    dispatch(AppSagaAction.getAllOrdersBySessionIndex(allSession.flatMap((session) => session.indexSession)));

    console.log('ordersForHistory => ', ordersForHistory);
    return () => {
      dispatch(appStoreActions.clearOrdersForHistory());
    };
  }, []);

  return (
    <>
      <div style={{ margin: '20px', color: '#addadd' }}>
        <h2>History session</h2>
      </div>
      <div
        style={{
          margin: '10px',
          display: 'flex',
          height: 'max-content',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
          color: '#addadd',
          gap: '10px',
        }}
      >
        {allSession.flatMap((session, indexSession) => (
          <div
            key={`session_${indexSession + 1}`}
            style={{
              width: '400px',
              padding: '10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              borderRadius: '10px',
              backgroundColor: '#1a1c1f',
            }}
          >
            <div style={{ fontWeight: 700 }}>{`Index session: ${session.indexSession.substring(
              0,
              3,
            )}...${session.indexSession.substring(session.indexSession.length - 3)}`}</div>
            {ordersForHistory.flatMap((order) => {
              return order.orders.flatMap((orderView, indexOrder) => {
                const { symbol, side, price, amount, createAt } = orderView;

                return (
                  order.indexSession === session.indexSession && (
                    <div key={`order_${indexOrder + 1}`} style={{ gap: '10px', display: 'flex', flexDirection: 'row' }}>
                      <span>{symbol}</span>
                      <span>{side}</span>
                      <span>{price}</span>
                      <span>{amount}</span>
                      <span>{createAt}</span>
                    </div>
                  )
                );
              });
            })}
          </div>
        ))}
      </div>
    </>
  );
};
